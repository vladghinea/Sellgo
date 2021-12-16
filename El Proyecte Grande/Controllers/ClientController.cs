using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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
        public async Task<List<Client>> GetClients()
        {
            List<Client> result = await services.GetClientsList();
            return result;
        }

        [HttpGet("{id}")]
        public async Task<Client> GetClient([FromRoute] int id)
        {
            Client result = await services.GetClientById(id);
            return result;
        }
       
        //Add Person  
        [HttpPost]
        public async Task<IActionResult> AddClient([FromBody] Client client)
        {
            if (client == null)
            {
                return BadRequest();
            }
            return Ok(await services.AddClient(client));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteClient([FromQuery]int id)
        {
            Client client = _db.Data.Clients.Find(id);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(await services.DeleteClient(id));

        }


    }
}
