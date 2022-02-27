using AppBackEnd.Data;
using AppBackEnd.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace AppBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        public AppDbContext Context { get; private set; }

        public BookController(AppDbContext context)
        {
            Context = context;
        }
        [HttpGet("all"),Authorize(Roles = UserRoles.User)]
        public IEnumerable<Book> All()
        {
            return Context.Books.ToList();
        }
        [HttpGet()]
        public Book Get(int id)
        {
            Book book = Context.Books.FirstOrDefault(x => x.Id == id);
            return book;
        }
        [HttpPost(),Authorize(Roles = UserRoles.Admin)]
        public bool Post(Book book)
        {
            try
            {
                Context.Books.Add(book);
                return Context.SaveChanges() == 1;
            }
            catch (System.Exception)
            {
                return false;
            }

        }
        [HttpPut()]
        public bool Update(Book book)
        {
            try
            {
                Context.Books.Update(book);
                return Context.SaveChanges() == 1;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
        [HttpDelete()]
        public bool Delete(int id)
        {
            try
            {
                Book book = Context.Books.FirstOrDefault(x => x.Id == id);
                Context.Books.Remove(book);
                return Context.SaveChanges() == 1;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
    }
}