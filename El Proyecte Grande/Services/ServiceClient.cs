using El_Proyecte_Grande.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServiceClient : IServiceClient
    {

        private readonly AppDbContext _db;
        public ServiceClient([FromServices] AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<Client>> GetClientsList()
        {
            var result = await _db.Clients.Select(client => client).ToListAsync();
            return result;
        }





    }
}
