using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServiceInterception
    {

        private IAppDbRepository _db;


        public ServiceInterception(IAppDbRepository db)
        {
            _db = db;
        }

        public async Task<List<Interception>> GetInterceptions()
        {
            var result = await _db.Data.Interceptions.Select(interception => interception).ToListAsync();
            return result;
        }


        public async Task<Interception> GetInterceptionById(int id)
        {
            var result = await _db.Data.Interceptions.FirstOrDefaultAsync(x => x.Id == id);

            return result;
        }

        public async Task<string> DeleteInterception(int id)
        {
            var interception = await _db.Data.Interceptions.FindAsync(id);
            _db.Data.Interceptions.Remove(interception);
            await _db.Data.SaveChangesAsync();
            return "DOne";
        }

        //Add Client      
        public async Task<Interception> AddInterception([FromBody] Interception interception)
        {

            await _db.Data.Interceptions.AddAsync(interception);
            await _db.Data.SaveChangesAsync();
            return interception;

        }
    }
}
