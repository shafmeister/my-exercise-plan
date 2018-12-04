using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Models.Authentication;
using MyExercisePlan.Entities;
using MyExercisePlan.Entities.Transposers;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;

namespace MyExercisePlan.Controllers.Authentication
{
    public class UserManager
    {
        UserTransposer _userTransposer = new UserTransposer();

        public Boolean CreateUser(ApplicationUser newUser)
        {
            //Convert Application User Model into Entity Framework Model
            U1User User = _userTransposer.TransposeModel(newUser);

            if (!User.Exists())
            {
                //Attempt to create user in db
                Boolean UserCreated = User.Create();
                return UserCreated;
            }
            else
            {
                return false;
            }
        }

        public String SignIn(string username, string password, Boolean internalSignIn)
        {
            //Internal Signin directly after registration, no password needed
            if (internalSignIn)
            {
                return TokenAuthority.GenerateToken(username);
            }
            else
            {
                ApplicationDataContext _db = new ApplicationDataContext();
                int UserCount = _db.U1User.Where(r => r.Username == username && r.Password == password).Count();
                if (UserCount > 1)
                {
                    //TODO Log Error
                    Debug.Print("Multiple users with the same username found, database integrity issue");
                    return null;
                }
                if (UserCount == 1)
                {
                    return TokenAuthority.GenerateToken(username);
                }
                else
                {
                    return null;
                }
            }
            
        }

        public ApplicationUser UpdateUser()
        {
        
            return null;
        }
    }
}