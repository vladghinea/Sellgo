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
    public class CompanyController : ControllerBase
    {
        private IAppDbRepository _db;
        private ServiceCompany services;
        public CompanyController(IAppDbRepository db)
        {
            _db = db;
            services = new ServiceCompany(_db);
        }

        //GET Clients
        [HttpGet]
        // [ValidateAntiForgeryToken]
        public async Task<List<Company>> GetCompanies()
        {
            List<Company> result = await services.GetCompaniesList();
            return result;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Company> GetCompany([FromRoute] int id)
        {
            Company result = await services.GetCompanyById(id);
            return result;
        }

        [HttpPost]
        public async Task<IActionResult> AddCompany([FromBody] Company company)
        {
            if (company == null)
            {
                return BadRequest();
            }
            return Ok(await services.AddCompany(company));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteCompany([FromQuery] int id)
        {

            Company company = _db.Data.Companies.Find(id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(await services.DeleteCompany(id));

        }
    }
}
