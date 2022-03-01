using Microsoft.AspNetCore.Identity;

namespace AppBackEnd.Models
{
    public class BiblioUser:IdentityUser
    {
        public ICollection<RefreshToken> RefreshTokens { get; set; }
    }
}