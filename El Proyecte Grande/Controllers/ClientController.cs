using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace El_Proyecte_Grande.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        public ServiceClient seviceClient;

        public ClientController(ServiceClient seviceClient)
        {
            this.seviceClient = seviceClient;
        }


        //GET Clients
        [HttpGet]
        [ValidateAntiForgeryToken]
        public List<Client> GetClients()
        {
            return seviceClient.GetClientsList();
        }
    }
}
