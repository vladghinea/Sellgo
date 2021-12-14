using El_Proyecte_Grande.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserPosition Position { get; set; }
        public string PhoneNumber { get; set; }
        public int CompanyId { get; set; }
        public byte[] Image { get; set; }
        public List<Deal> Deals { get; set; }

    }
}
