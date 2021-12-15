using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        //public IServiceClient seviceClient;

        //public CompanyController(IServiceClient seviceClient)
        //{
        //    this.seviceClient = seviceClient;
        //}

        ////GET Company
        //[HttpGet]
        //// [ValidateAntiForgeryToken]
        //public async Task<List<Client>> GetClients()
        //{
        //    List<Client> result = await seviceClient.GetClientsList();
        //    return result;
        //}

        //[HttpGet]
        //[Route("{id}")]
        //public async Task<Client> GetClient([FromRoute] int id)
        //{
        //    Client result = await seviceClient.GetClientById(id);
        //    return result;
        //}
    }
}
