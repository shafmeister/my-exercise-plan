using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using MyExercisePlan.Models.Authentication;

namespace MyExercisePlan.Controllers.Authentication
{
    public class LoginManager
    {

        public Boolean AuthenticateUser(string username, string password)
        {
            return false;
        }
    }


}