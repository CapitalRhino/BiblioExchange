using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AppBackEnd.Models
{
public class Offer
    {
        [KeyAttribute]
        public int Id { get; set; }
        
        public int BookId { get; set; }
        [ForeignKey("Books")]
        public Book Book { get; set; }
       
        public string UserId { get; set; } 
        [ForeignKey("Users")]
        public BiblioUser User { get; set; }
        public string Description { get; set; }
        [Required]
        public DateTime UploadTime { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        
    }
}