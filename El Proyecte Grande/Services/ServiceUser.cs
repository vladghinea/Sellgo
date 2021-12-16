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

        public async Task<User> AddUser(User user)
        {
            //user.Password = Utils.Helper.HashPassword(user.Password);
            //user.Id = _db.Data.Users.OrderBy(user => user.Id).Select(user => user.Id).Last() + 1;
            await _db.Data.Users.AddAsync(user);
            await _db.Data.SaveChangesAsync();
            return user;

        }
        public bool TryAddUser(User user)
        {
            if (user.Password == user.ConfirmPassword)
            {
                return true;
            }
            return false;
        }

        public async Task<string> DeleteUser(int id)
        {
            User user = await _db.Data.Users.FindAsync(id);
            string name = user.FirstName + " " + user.LastName + " id: " + id.ToString();
            _db.Data.Users.Remove(user);
            _db.Data.SaveChanges();
            return name;
        }

        public async Task<User> UpdateUser(User newUser)
        {
            //_db.Data.Users.Update(newUser);
            _db.Data.Entry(newUser).State = EntityState.Modified;

            await _db.Data.SaveChangesAsync();
            return newUser;

        }


    }
}