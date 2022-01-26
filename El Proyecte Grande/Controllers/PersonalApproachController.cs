
using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
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
    public class PersonalApproachController : ControllerBase
    {
        public IAppDbRepository _db;
        private ServicePersonalApproach _servicePersonalApproach;

        public PersonalApproachController(IAppDbRepository db, ServicePersonalApproach servicePersonalApproach)
        {
            _db = db;
            _servicePersonalApproach = servicePersonalApproach;
        }

        [HttpGet]
        [Route("{clientid:int}")]
        public async Task<List<PersonalApproach>> GetPersonalApproach([FromRoute] int clientid)
        {
            return await _servicePersonalApproach.GetPersonalApproachList(clientid);
        }

        [HttpGet]
        [Route("{clientid}/{id}")]
        public async Task<PersonalApproach> GetPersonalApproachById([FromRoute] int clientid, int id)
        {
            return await _servicePersonalApproach.GetPersonalApproachById(clientid, id);
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
        public async Task<IActionResult> DeletePersonalApproach([FromQuery] int clientid, int id)
        {

            PersonalApproach personalApproach = _db.Data.PersonalApproaches.Find(id);
            if (personalApproach == null)
            {
                return NotFound();
            }
            return Ok(await _servicePersonalApproach.DeletePersonalApproach(id));

        }

    }
}
