using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace El_Proyecte_Grande.Utils
{
    public class EmailUserUniqueAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(
            object value, ValidationContext validationContext)
            {
                var _context = (AppDbContext)validationContext.GetService(typeof(AppDbContext));
                var entity = _context.Users.FirstOrDefault(e => e.Email == value.ToString());

                if (entity != null)
                {
                    return new ValidationResult(GetErrorMessage(value.ToString()));
                }
                return ValidationResult.Success;
            }

        public string GetErrorMessage(string email)
        {
            return $"Email {email} is already in use.";
        }
    }
}