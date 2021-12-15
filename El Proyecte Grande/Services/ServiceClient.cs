using El_Proyecte_Grande.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace El_Proyecte_Grande.Services
{
    public class ServiceClient
    {
       
        private readonly AppDbContext _db;
        public ServiceClient([FromServices] AppDbContext db)
        {
               _db = db;
        }

       public List<Client> GetClientsList()
        {

            return _db. .Clients.Select(client=>client).ToList();
        }



        
        
    }
}
