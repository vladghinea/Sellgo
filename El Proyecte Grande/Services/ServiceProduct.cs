using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public class ServiceProduct
    {
        private IAppDbRepository _db;


        public ServiceProduct(IAppDbRepository db)
        {
            _db = db;
        }

        public async Task<List<Product>> GetProductList()
        {
            var result = await _db.Data.Products.Select(product => product).ToListAsync();
            return result;
        }

        public async Task<Product> GetProductById(int id)
        {
            var result = await _db.Data.Products.FirstOrDefaultAsync(product => product.Id == id);
            return result;
        }

        internal async Task<object> AddProduct(Product product)
        {
            await _db.Data.Products.AddAsync(product);
            await _db.Data.SaveChangesAsync();
            return product;
        }

        public async Task<string> DeleteProduct(int id)
        {
            var obj = await _db.Data.Products.FindAsync(id);
            string name = obj.Name;
            _db.Data.Products.Remove(obj);
            await _db.Data.SaveChangesAsync();
            return name;
        }
    }
}
