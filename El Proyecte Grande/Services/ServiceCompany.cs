using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace El_Proyecte_Grande.Services
{
    public class ServiceCompany
    {

        private IAppDbRepository _db;


        public ServiceCompany(IAppDbRepository db)
        {
            _db = db;
        }

        public async Task<List<Company>> GetCompaniesList()
        {
            var result = await _db.Data.Companies.Select(company => new Company
            {
                Id = company.Id,
                Name = company.Name,
                CUI = company.CUI,
                Email = company.Email,
                Address = company.Address,
                Logo = company.Logo,
                Empmloyees = company.Empmloyees,
                Deals = company.Deals,
                Teams = company.Teams
            }).ToListAsync();
            return result;
        }


        public async Task<Company> GetCompanyById(int id)
        {
            Company result = await _db.Data.Companies.FirstOrDefaultAsync(x => x.Id == id);

            return result;
        }


        public async Task<Company> AddCompany(Company company)
        {

            //company.Id = _db.Data.Users.OrderBy(company => company.Id).Select(company => company.Id).Last() + 1;
            await _db.Data.Companies.AddAsync(company);
            await _db.Data.SaveChangesAsync();
            return company;

        }

        public async Task<string> DeleteCompany(int id)
        {
            var obj = await _db.Data.Companies.FindAsync(id);
            string name = obj.Name;
            _db.Data.Companies.Remove(obj);
            await _db.Data.SaveChangesAsync();
            return name;
        }


    }
}
