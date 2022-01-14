using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Dtos
{
    public class ResponseLoginDto
    {
        public ResponseLoginDto(string name, string expireAt, string jwttoken, string team, string teamManager, string role)
        {
            Name = name;
            ExpireAt = expireAt;
            Jwttoken = jwttoken;
            Team = team;
            TeamManager = teamManager;
            Role = role;
        }

        public string Name { get; set; }
        public string ExpireAt { get; set; }

        public string Jwttoken { get; set; }

        public string Team { get; set; }
        public string TeamManager { get; set; }

        public string Role { get; set; }

    }
}