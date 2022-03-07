using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Security.Cryptography;
using System;
using AppBackEnd.Data;
using AppBackEnd.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace AppBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OfferController : ControllerBase
    {
        public AppDbContext Context { get; private set; }

        public OfferController(AppDbContext context)
        {
            Context = context;
        }
        
        [HttpGet("all")]
        public IEnumerable<Offer> All()
        {
            return Context.Offers.ToList();
        }

        [HttpGet()]
        public Offer Get(int id)
        {
            Offer offer = Context.Offers.FirstOrDefault(x => x.Id == id);
            return offer;
        }

        [HttpGet("rnd")]
        public IEnumerable<Offer> NRandomOffers(int n)
        {
            Random rnd = new Random();
            List<Offer> temp = Context.Offers.ToList();
            List<Offer> output = new List<Offer>();
            for (var i = 1; i <= n; i++)
            {
                int num = rnd.Next(0,temp.Count());
                Offer offer = temp[num];
                output.Add(offer);
                temp.RemoveAt(num);
            }
            return output;
        }

        [HttpPost(),Authorize(Roles = UserRoles.Admin)]
        public bool Post(Offer offer)
        {
            try
            {
                Context.Offers.Add(offer);
                return Context.SaveChanges() == 1;
            }
            catch (System.Exception)
            {
                return false;
            }

        }

        [HttpPut(),Authorize(Roles = UserRoles.Admin)]
        public bool Update(Offer offer)
        {
            try
            {
                Context.Offers.Update(offer);
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
                Offer offer = Context.Offers.FirstOrDefault(x => x.Id == id);
                Context.Offers.Remove(offer);
                return Context.SaveChanges() == 1;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
    }
}