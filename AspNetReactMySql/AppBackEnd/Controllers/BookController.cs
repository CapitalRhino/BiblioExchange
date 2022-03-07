using System;
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

        [HttpGet("all")]
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

        [HttpGet("rnd")]
        public IEnumerable<Book> NRandomBooks(int n)
        {
            Random rnd = new Random();
            List<Book> temp = Context.Books.ToList();
            List<Book> output = new List<Book>();
            for (var i = 1; i <= n; i++)
            {
                int num = rnd.Next(0,temp.Count());
                Book book = temp[num];
                output.Add(book);
                temp.RemoveAt(num);
            }
            return output;
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

        [HttpPut(),Authorize(Roles = UserRoles.Admin)]
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

        [HttpDelete(),Authorize(Roles = UserRoles.Admin)]
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