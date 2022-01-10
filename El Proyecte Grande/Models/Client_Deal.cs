using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class Client_Deal
    {
        public int ClientId { get; set; }
        [ForeignKey("ClientId")]
        public Client Client { get; set; }

        public int DealId { get; set; }
        [ForeignKey("DealId")]
        public Deal Deal { get; set; }
    }
}
