using El_Proyecte_Grande.Models;
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
        public IServiceClient seviceClient;

        public ClientController(IServiceClient seviceClient)
        {
            this.seviceClient = seviceClient;
        }


        //GET Clients
        [Route("Clients")]
        [HttpGet]
        // [ValidateAntiForgeryToken]
        public async Task<List<Client>> index()
        {
            List<Client> result = await seviceClient.GetClientsList();
            return result;
        }
    }
}
