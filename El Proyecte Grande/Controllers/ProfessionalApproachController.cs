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
    public class ProfessionalApproachController : ControllerBase
    {
        public IAppDbRepository _db;
        private ServiceProfessionalApproach _serviceProfessionalApproach;

        public ProfessionalApproachController(IAppDbRepository db)
        {
            _db = db;
            _serviceProfessionalApproach = new ServiceProfessionalApproach(_db);
        }

        [HttpGet]
        [Route("{clientid:int}")]
        public async Task<List<ProfessionalApproach>> GetProfessionalApproach([FromRoute] int clientid)
        {
            return await _serviceProfessionalApproach.GetProfessionalApproachList(clientid);
        }



        [HttpPost]
        public async Task<IActionResult> AddProfessionalApproach([FromBody] ProfessionalApproach personalApproach)
        {
            if (personalApproach == null)
            {
                return BadRequest();
            }

            return Ok(await _serviceProfessionalApproach.AddProfessionalApproach(personalApproach));


        }

        [HttpDelete]
        public async Task<IActionResult> DeleteProfessionalApproach([FromQuery] int clientid, int id)
        {

            ProfessionalApproach personalApproach = _db.Data.ProfessionalApproaches.Find(id);
            if (personalApproach == null)
            {
                return NotFound();
            }
            return Ok(await _serviceProfessionalApproach.DeleteProfessionalApproach(id));

        }

    }

}
