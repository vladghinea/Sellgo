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
    public class UserController : ControllerBase
    {
        public IAppDbRepository _db;
        private ServiceUser serviceUser;

        public UserController(IAppDbRepository db)
        {
            _db = db;
            serviceUser = new ServiceUser(_db);
        }

        [HttpGet]
        public async Task<List<User>> GetUsers()
        {
            return await serviceUser.GetUsers();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<User> GetUser([FromRoute] int id)
        {
            return await serviceUser.GetUser(id);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            if (serviceUser.TryAddUser(user))
            {

                return Ok(await serviceUser.AddUser(user));
            }
            return BadRequest();

        }
    }
}