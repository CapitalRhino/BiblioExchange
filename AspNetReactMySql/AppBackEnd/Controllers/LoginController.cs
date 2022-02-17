using AppBackEnd.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AppBackEnd.Controllers
{
    [ApiController]
    [Route("Auth")]
    public class UserController:ControllerBase
    {
        public AppDbContext Context { get; private set; }
        public PasswordHasher<IdentityUser> Hasher { get; set; }
        public UserController(AppDbContext context)
        {
            Context = context;
            Hasher = new PasswordHasher<IdentityUser>();
        }
        [HttpGet()]
        public int Get(string userName,string password)
        {
            IdentityUser identityUser = Context.Users.FirstOrDefault(x => x.UserName == userName);
            if(identityUser== null) return 2;
            PasswordVerificationResult verifyPassword=Hasher.VerifyHashedPassword(identityUser,identityUser.PasswordHash,password);
            if(verifyPassword==PasswordVerificationResult.Success)return 0;
            return 1;
        }
        [HttpPost()]
        public void Post(string userName,string email,string phono,string password)
        {
            IdentityUser user = new IdentityUser();
            user.UserName = userName;
            user.Email = email;
            user.PhoneNumber = phono;
            user.PasswordHash = Hasher.HashPassword(user,password);
            Context.Users.Add(user);
            Context.SaveChanges();
        }
    }
}