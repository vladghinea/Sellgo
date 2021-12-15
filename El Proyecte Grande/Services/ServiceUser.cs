using El_Proyecte_Grande.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using El_Proyecte_Grande.Utils;
using El_Proyecte_Grande.Repository;

namespace El_Proyecte_Grande.Services
{
    public class ServiceUser 
    {
        private IAppDbRepository _db;
        public ServiceUser(IAppDbRepository db)
        {
            _db = db;
        }
        public async Task<User> GetUser(int id)
        {
            return await _db.Data.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<User>> GetUsers()
        {
            return await _db.Data.Users.ToListAsync();
        }

        public async void AddUser(User user)
        {
            user.Password = Utils.Helper.HashPassword(user.Password);
            await _db.Data.SaveChangesAsync();
        }
        public bool TryAddUser(User user)
        {
            if (user.Password == user.ConfirmPassword)
            {
                return true;
            }
            return false;
        }
    }
}