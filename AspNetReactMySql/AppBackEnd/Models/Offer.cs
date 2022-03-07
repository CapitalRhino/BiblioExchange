using System.ComponentModel.DataAnnotations;

namespace AppBackEnd.Models
{
public class Offer
    {
        [KeyAttribute]
        public int Id { get; set; }
        [Required]
        public Book Book { get; set; }
        [Required]
        public BiblioUser User { get; set; }
        public string Description { get; set; }
        [Required]
        public DateTime UploadTime { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        
    }
}