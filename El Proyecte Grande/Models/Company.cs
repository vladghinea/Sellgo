using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CUI { get; set; }
        public string Email { get; set; }
        public byte[] Logo { get; set; }
        public List<Client> Employees { get; set; }

    }
}
