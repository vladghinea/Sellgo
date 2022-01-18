using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DealController : ControllerBase
    {
        private IAppDbRepository _db;
        private ServiceDeal services;
        public DealController(IAppDbRepository db)
        {
            _db = db;
            services = new ServiceDeal(_db);
        }


        //GET Clients
        [HttpGet]
        public async Task<List<Deal>> GetDeals()
        {
            List<Deal> result = await services.GetDealsList();
            return result;
        }
        //GET Client

        [HttpGet("dealsforuser/{id}")]
        public async Task<List<Deal>> GetDealOfUser([FromRoute] string id)
        {
            List<Deal> result = await services.GetDealsForUser(id);
            return result;
        }


        //GET Client
        [HttpGet("{id:int}")]
        public async Task<Deal> GetDealById([FromRoute] int id)
        {
            Deal result = await services.GetDealById(id);
            return result;
        }

        //Add Client  
        [HttpPost]
        public async Task<IActionResult> AddDeal([FromBody] Deal deal)
        {
            if (deal == null)
            {
                return BadRequest();
            }
            return Ok(await services.AddDeal(deal));
        }

        //Delete Client
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteDeal(int id)
        {
            Deal deal = _db.Data.Deals.Find(id);
            if (deal == null)
            {
                return NotFound();
            }
            return Ok(await services.DeleteDeal(id));

        }

        //Update Client
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateDeal(int id, [FromBody] Deal deal)
        {

            if (id != deal.Id)
            {
                return BadRequest();
            }

            _db.Data.Entry(deal).State = EntityState.Modified;

            try
            {
                await _db.Data.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Data.Deals.Any(deal => deal.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();

        }


    }
}
