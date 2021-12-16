using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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

        [HttpDelete]
        public async Task<IActionResult> DeleteUser([FromQuery] int id)
        {

            User user = _db.Data.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(await serviceUser.DeleteUser(id));

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
        {

            if (id != user.Id)
            {
                return BadRequest();
            }

            _db.Data.Entry(user).State = EntityState.Modified;

            try
            {
                await _db.Data.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_db.Data.Users.Any(user => user.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();

        }

    }
}