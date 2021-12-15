using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private IAppDbRepository _db;
        private ServiceClient services;
        public ClientController(IAppDbRepository db)
        {
            _db = db;
            services = new ServiceClient(_db);
        }

        //GET Clients
        [HttpGet]
        // [ValidateAntiForgeryToken]
        public async Task<List<Client>> GetClients()
        {
            List<Client> result = await services.GetClientsList();
            return result;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Client> GetClient([FromRoute] int id)
        {
            Client result = await services.GetClientById(id);
            return result;
        }
    }
}
