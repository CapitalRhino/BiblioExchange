using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using AppBackEnd.Data;
using AppBackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AppBackEnd.Controllers
{
    [ApiController]
    [Route("Auth")]
    public class UserController:ControllerBase
    {
        private AppDbContext Context { get;  set; }
        public PasswordHasher<IdentityUser> Hasher { get; set; }
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _config;
        public UserController(AppDbContext context,
        RoleManager<IdentityRole> roleManager,
        UserManager<IdentityUser> userManager,
        IConfiguration configuration)
        {
            Context = context;
            Hasher = new PasswordHasher<IdentityUser>();
            _userManager = userManager;
            _roleManager =roleManager;
            _config = configuration;
        }
        [HttpPost("Login")]
        public async Task<ActionResult<IdentityUser>> Login(UserDToLogin request)
        {
            IdentityUser identityUser = Context.Users.FirstOrDefault(x => request.Username == x.UserName);
            if(identityUser== null) return BadRequest("User not found");
            PasswordVerificationResult verifyPassword=Hasher.VerifyHashedPassword(identityUser,identityUser.PasswordHash,request.PasswordHashed);
            if(verifyPassword==PasswordVerificationResult.Failed)return BadRequest("Wrong password");
            Token token = await CreateToken(identityUser);
            return Ok(token);
        }
        private async Task<Token> CreateToken(IdentityUser user)
        {
            var userRoles =  await _userManager.GetRolesAsync(user);
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
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256Signature);
            // var expire_in = 300;
            var token = new JwtSecurityToken(
                claims:claims,
                expires:DateTime.Now.AddHours(2),
                signingCredentials: creds);
            string jwt = new JwtSecurityTokenHandler().WriteToken(token);
            Token jwtToken = new Token();
            jwtToken.AccessToken = jwt;
            return jwtToken;
        }
        [HttpPost("Register")]
        public async Task<ActionResult<IdentityUser>> Register(UserDtoRegister request) 
        {
            IdentityUser checkForExistingUser = Context.Users.FirstOrDefault(x => request.Username == x.UserName);
            if(checkForExistingUser!=null)return BadRequest("Username with this username already exist");
            IdentityUser user = new IdentityUser();
            user.UserName = request.Username;
            user.Email = request.Email;
            user.PhoneNumber = request.Phone;
            user.PasswordHash = Hasher.HashPassword(user,request.PasswordHashed);
            await Context.Users.AddAsync(user);
            await Context.SaveChangesAsync();
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            await _userManager.AddToRoleAsync(user, UserRoles.User);
            Token token = await CreateToken(user);
            return Ok(token);
        }
    }
}