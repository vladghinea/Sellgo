using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Team
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public List<User> Sellers { get; set; }
        public User Manager { get; set; }
        public Company CompanyId { get; set; }
        public byte[] Icon { get; set; }

    }
}
