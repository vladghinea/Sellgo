using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServiceProfessionalApproach
    {
        private IAppDbRepository _db;

        public ServiceProfessionalApproach(IAppDbRepository db)
        {
            _db = db;
        }
        public async Task<List<ProfessionalApproach>> GetProfessionalApproachList(int clientid)
        {
            var result = await _db.Data.ProfessionalApproaches.Where(approach => approach.ClientId == clientid).ToListAsync();
            return result;
        }

        public async Task<string> DeleteProfessionalApproach(int id)
        {
            ProfessionalApproach professionalApproach = await _db.Data.ProfessionalApproaches.FindAsync(id);
            _db.Data.ProfessionalApproaches.Remove(professionalApproach);
            await _db.Data.SaveChangesAsync();
            return $"Professional Approach with {id} got delete";
        }

        //Add Client      
        public async Task<ProfessionalApproach> AddProfessionalApproach([FromBody] ProfessionalApproach professionalApproach)
        {

            await _db.Data.ProfessionalApproaches.AddAsync(professionalApproach);
            await _db.Data.SaveChangesAsync();
            return professionalApproach;

        }
    }
}
