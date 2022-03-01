namespace AppBackEnd.Models
{
    public class Token
    {
        public string AccessToken { get; set; }
        public ICollection<string>  Roles { get; set; }
    }
}