using El_Proyecte_Grande.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Deal
    {
        [Key]
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string UserId { get; set; }
        public PriorityTypes Priority { get; set; }
        public StatusTypes Status { get; set; }

        //Relationship 

        //Client (OneToManyToManyToOne)
        public virtual List<Client_Deal> Clients { get; set; }
        //Interception (OneToMany)
        public virtual List<Interception> Interceptions { get; set; }
        //Products (OneToMany)
        public virtual List<Product> Products { get; set; }
    }
}
