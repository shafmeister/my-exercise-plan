using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Models.Authentication;
using MyExercisePlan.Entities;
using MyExercisePlan.Entities.Transposers;

namespace MyExercisePlan.Controllers.Authentication
{
    public class UserManager
    {
        UserTransposer _userTransposer = new UserTransposer();
        ApplicationDataContext _db = new ApplicationDataContext();
        U1User _user = new U1User();

        public Boolean CreateUser(ApplicationUser newUser)
        {
            //Convert Application User Model into Entity Framework Model
            U1User User = _userTransposer.TransposeModel(newUser);

            //Attempt to create user in db
            Boolean UserCreated = User.AddToDb();

            return UserCreated;
        }

        public ApplicationUser UpdateUser()
        {
        
            return null;
        }
    }
}