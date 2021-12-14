using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal ActualPrice { get; set; }
        public decimal MinimPrice { get; set; }
        public decimal SoldPrice { get; set; }
        public string Guarantees { get; set; }
        public string Benefits { get; set; }
        public string UpSell { get; set; }
        public string CrossSell { get; set; }
        public string BundlingSell { get; set; }
    }
}
