
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
    public class PersonalApproachController : ControllerBase
    {
        public IAppDbRepository _db;
        private ServicePersonalApproach _servicePersonalApproach;

        public PersonalApproachController(IAppDbRepository db)
        {
            _db = db;
            _servicePersonalApproach = new ServicePersonalApproach(_db);
        }

        [HttpGet]
        [Route("{clientid:int}")]
        public async Task<List<PersonalApproach>> GetPersonalApproach([FromRoute] int clientid)
        {
            return await _servicePersonalApproach.GetPersonalApproachList(clientid);
        }



        [HttpPost]
        public async Task<IActionResult> AddPersonalApproach([FromBody] PersonalApproach personalApproach)
        {
            if (personalApproach == null)
            {
                return BadRequest();
            }

            return Ok(await _servicePersonalApproach.AddPersonalApproach(personalApproach));

        }


        [HttpDelete]
        [Route("{clientid:int}/{id}")]
        public async Task<IActionResult> DeletePersonalApproach([FromQuery] int clientid, int id)
        {

            PersonalApproach personalApproach = _db.Data.PersonalApproaches.Find(id);
            if (personalApproach == null)
            {
                return NotFound();
            }
            return Ok(await _servicePersonalApproach.DeletePersonalApproach(id));

        }

        
        //Update PersonalApproach
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateClient(int id, [FromBody] PersonalApproach personalApproach)
        {

            if (id != personalApproach.Id)
            {
                return BadRequest();
            }

            _db.Data.Entry(personalApproach).State = EntityState.Modified;

            try
            {
                await _db.Data.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Data.PersonalApproaches.Any(personalApproach => personalApproach.Id == id))
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
