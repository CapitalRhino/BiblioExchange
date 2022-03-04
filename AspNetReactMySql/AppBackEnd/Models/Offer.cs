using System.ComponentModel.DataAnnotations;

namespace AppBackEnd.Models
{
public class Offer
    {
        [KeyAttribute]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public int UserId { get; set; }
        public BiblioUser User { get; set; }
        [Required]
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        
    }
}