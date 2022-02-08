using AppBackEnd.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AppBackEnd.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    {
        public DbSet<Book> Books { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}