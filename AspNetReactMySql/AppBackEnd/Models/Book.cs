using System.ComponentModel.DataAnnotations;

namespace AppBackEnd.Models
{
public class Book
    {
        [KeyAttribute]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public int Year { get; set; }
        public string ImageUrl { get; set; }
    }
}