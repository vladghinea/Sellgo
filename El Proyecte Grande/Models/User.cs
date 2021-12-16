using El_Proyecte_Grande.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(50)]
        public string LastName { get; set; }

        [EmailUnique]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(150, MinimumLength = 6)]
        public string Password { get; set; }
        [Required]
        [NotMapped]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
        public UserPosition Position { get; set; }

        [Phone(ErrorMessage = "Invalid Phone Number")]
        [Column(TypeName = "varchar(30)")]
        public string PhoneNumber { get; set; }
        public byte[] Image { get; set; }

        //Relationship

        //Deal (OneToMany)
        public virtual List<Deal> Deals { get; set; }

        //Company (ManyToOne)        
        public int CompanyId { get; set; }
        [ForeignKey("CompanyId")]
        public Company Company { get; set; }

        //Team (ManyToOne)
        public int? TeamId { get; set; }
        [ForeignKey("TeamId")]
        public Team Team { get; set; }



    }
}
