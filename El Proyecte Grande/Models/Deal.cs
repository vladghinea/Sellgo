using El_Proyecte_Grande.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Deal
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int UserId { get; set; }
        public PiroityTypes  Priority { get; set; }
        public StatusTypes Status { get; set; }
        public List<Interception> Interceptions { get; set; }
        public List<Product> Products { get; set; }
    }
}
