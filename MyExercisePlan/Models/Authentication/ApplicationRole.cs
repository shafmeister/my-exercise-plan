using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.Authentication
{
    public class ApplicationRole 
    {
        string Name { get; set; }

        public ApplicationRole(string roleName)
        {
            Name = roleName;
        }
    }
}
