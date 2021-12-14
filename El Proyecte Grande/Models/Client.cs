using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using El_Proyecte_Grande.Utils;

namespace El_Proyecte_Grande.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Position { get; set; }
        public GenderTypes Gender { get; set; }
        public string Adress { get; set; }
        public Dictionary<string,string> SocialMedia { get; set; }
        public int CompanyId { get; set; }
        public int TeamId { get; set; }
        public int ProfessionalApproachId { get; set; }
        public int PersonalApproachId { get; set; }

    }
}
