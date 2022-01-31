using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServicePersonalApproach
    {
        private IAppDbRepository _db;

        public ServicePersonalApproach(IAppDbRepository db)
        {
            _db = db;
        }
        public async Task<PersonalApproach> GetPersonalApproachList(int clientid)
        {
            var result = await _db.Data.PersonalApproaches.Where(approach => approach.ClientId == clientid).SingleAsync();
            return result;
        }


        //Add Personal Approach Service 
        public async Task<PersonalApproach> AddPersonalApproach([FromBody] PersonalApproach personalApproach)
        {

            await _db.Data.PersonalApproaches.AddAsync(personalApproach);
            await _db.Data.SaveChangesAsync();
            return personalApproach;

        }

        public async Task<string> DeletePersonalApproach(int id)
        {
            PersonalApproach personalApproach = await _db.Data.PersonalApproaches.FindAsync(id);
            _db.Data.PersonalApproaches.Remove(personalApproach);
            await _db.Data.SaveChangesAsync();
            return $"Deal with {id} got delete";
        }


    }
}
