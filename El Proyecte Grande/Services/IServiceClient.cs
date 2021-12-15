using El_Proyecte_Grande.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Services
{
    public interface IServiceClient
    {
        Task<List<Client>> GetClientsList();
    }
}