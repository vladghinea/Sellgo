using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServiceDeal
    {

        private IAppDbRepository _db;


        public ServiceDeal(IAppDbRepository db)
        {
            _db = db;
        }

        public async Task<List<Deal>> GetDealsList()
        {
            var result = await _db.Data.Deals.Select(deal => new Deal
            {
                Id = deal.Id,
                UserId = deal.UserId,
                Priority = deal.Priority,
                Status = deal.Status,
                ClientId = deal.ClientId,
                Client = deal.Client,
                Interceptions = deal.Interceptions,
                Products = deal.Products,
                Company = deal.Client.Company.Name
            }).ToListAsync();
            return result;
        }

        public async Task<List<Deal>> GetDealsForUser(string id)
        {
            var result = await _db.Data.Deals.Where(deal => deal.UserId == id).ToListAsync();
            return result;
        }


        public async Task<Deal> GetDealById(int id)
        {
            Deal result = await _db.Data.Deals.FirstOrDefaultAsync(x => x.Id == id);

            return result;
        }

        public async Task<string> DeleteDeal(int id)
        {
            Deal deal = await _db.Data.Deals.FindAsync(id);
            _db.Data.Deals.Remove(deal);
            await _db.Data.SaveChangesAsync();
            return $"Deal with {id} got delete";
        }

        //Add Client      
        public async Task<Deal> AddDeal([FromBody] Deal deal)
        {

            await _db.Data.Deals.AddAsync(deal);
            await _db.Data.SaveChangesAsync();
            return deal;

        }
    }
}
