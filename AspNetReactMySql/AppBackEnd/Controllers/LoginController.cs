using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using AppBackEnd.Data;
using AppBackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AppBackEnd.Controllers
{
    [ApiController]
    [Route("Auth")]
    public class UserController : ControllerBase
    {
        private AppDbContext Context { get; set; }
        public PasswordHasher<BiblioUser> Hasher { get; set; }
        private readonly UserManager<BiblioUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _config;
        private const int RefreshTokenActiveDays = 2;

        public UserController(AppDbContext context,
        RoleManager<IdentityRole> roleManager,
        UserManager<BiblioUser> userManager,
        IConfiguration configuration)
        {
            Context = context;
            Hasher = new PasswordHasher<BiblioUser>();
            _userManager = userManager;
            _roleManager = roleManager;
            _config = configuration;
        }
        [HttpPost("Login")]
        public async Task<ActionResult<BiblioUser>> Login(UserDToLogin request)
        {
            BiblioUser BiblioUser = Context.Users.FirstOrDefault(x => request.Username == x.UserName);
            if (BiblioUser == null) return BadRequest("User not found");
            PasswordVerificationResult verifyPassword = Hasher.VerifyHashedPassword(BiblioUser, BiblioUser.PasswordHash, request.PasswordHashed);
            if (verifyPassword == PasswordVerificationResult.Failed) return BadRequest("Wrong password");
            Token token = await CreateToken(BiblioUser);
            string refreshToken = await GenerateRefreshToken(BiblioUser);
            Response.Cookies.Append(
                "Token",
                refreshToken,
                new CookieOptions { Expires = DateTime.Now.AddDays(1), HttpOnly = true, Secure = true }
            );
            return Ok(token);
        }

        private async Task<string> GenerateRefreshToken(BiblioUser user)
        {
            var randomNumber = new byte[32];
            string token = "";
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                token = Convert.ToBase64String(randomNumber);
            }
            RefreshToken refreshToken = new RefreshToken();
            refreshToken.UserId = user.Id;
            refreshToken.Value = token;
            refreshToken.Expires = DateTime.Now.AddHours(RefreshTokenActiveDays);
            refreshToken.Revoke = null;
            Context.RefreshTokens.Add(refreshToken);
            Context.SaveChanges();
            return token;
        }
        private async Task<Token> CreateToken(BiblioUser user)
        {
            var userRoles = await _userManager.GetRolesAsync(user);
            List<Claim> claims = new List<Claim>
            {
                new Claim("ClaimTypes.Name",user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            foreach (var userRole in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
            }
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _config.GetSection("TokenSettings").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            // var expire_in = 300;
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);
            string jwt = new JwtSecurityTokenHandler().WriteToken(token);
            Token jwtToken = new Token();
            jwtToken.AccessToken = jwt;
            return jwtToken;
        }
        [HttpPost("Register")]
        public async Task<ActionResult<BiblioUser>> Register(UserDtoRegister request)
        {
            BiblioUser checkForExistingUser = Context.Users.FirstOrDefault(x => request.Username == x.UserName);
            if (checkForExistingUser != null) return BadRequest("Username with this username already exist");
            BiblioUser user = new BiblioUser();
            user.UserName = request.Username;
            user.Email = request.Email;
            user.PhoneNumber = request.Phone;
            user.PasswordHash = Hasher.HashPassword(user, request.PasswordHashed);
            await Context.Users.AddAsync(user);
            await Context.SaveChangesAsync();
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            await _userManager.AddToRoleAsync(user, UserRoles.User);
            Token token = await CreateToken(user);
            return Ok(token);
        }
        [HttpPost("RegisterAdmin")]
        public async Task<ActionResult<BiblioUser>> RegisterAdmin(UserDtoRegister request)
        {
            BiblioUser checkForExistingUser = Context.Users.FirstOrDefault(x => request.Username == x.UserName);
            if (checkForExistingUser != null) return BadRequest("Username with this username already exist");
            BiblioUser user = new BiblioUser();
            user.UserName = request.Username;
            user.Email = request.Email;
            user.PhoneNumber = request.Phone;
            user.PasswordHash = Hasher.HashPassword(user, request.PasswordHashed);
            await Context.Users.AddAsync(user);
            await Context.SaveChangesAsync();
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            await _userManager.AddToRoleAsync(user, UserRoles.User);
            await _userManager.AddToRoleAsync(user, UserRoles.Admin);
            Token token = await CreateToken(user);
            return Ok(token);
        }
        [HttpPost]
        [Route("RefreshToken")]
        public async Task<ActionResult<BiblioUser>> RefreshToken()
        {

            string refresh = Request.Cookies["Token"];
            if(refresh==null) return BadRequest("Not cookie found");
            var found = Context.RefreshTokens.FirstOrDefault(x=>x.Value == refresh);
            if(found==null)return BadRequest("Invalid refresh token");
            if(found.IsActive)return BadRequest("Expired or revoke token");
            Token token = await CreateToken(Context.Users.FirstOrDefault(x=>x.Id==found.UserId));
            return Ok(token);
        }
    }
}