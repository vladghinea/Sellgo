using El_Proyecte_Grande.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Interception
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public LocationTypes Location { get; set; }
        public Address Address { get; set; }
        public string OnlineMeet { get; set; }
    }
}
