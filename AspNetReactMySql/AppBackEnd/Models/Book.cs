using System.ComponentModel.DataAnnotations;

namespace AppBackEnd.Models
{
public class Book
    {
        [KeyAttribute]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ISBN {get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Description { get; set; }
        public int Year { get; set; }
        public string ImageUrl { get; set; }        
        public string Publisher { get; set; }
    }
}