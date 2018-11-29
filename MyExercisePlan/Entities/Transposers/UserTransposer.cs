using MyExercisePlan.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Entities.Transposers
{
    public class UserTransposer 
    {
        public ApplicationUser TransposeEntity(U1User user)
        {
            //Create new ApplicationUser from U1User Entity
            ApplicationUser applicationUser = new ApplicationUser
                (
                    user.UserId,
                    user.Username,
                    user.Password,
                    user.Firstname,
                    user.Middlename,
                    user.Lastname,
                    user.State,
                    user.City
                );

            return applicationUser;
        }

        public U1User TransposeModel(ApplicationUser user)
        {
            //Create new U1User Entity from ApplicationUser
            U1User dbUser = new U1User
                (
                    user.UserID,
                    user.Username,
                    user.Password,
                    user.Firstname,
                    user.Middlename,
                    user.Lastname,
                    user.State,
                    user.City
                );

            return dbUser;
        }   
    }
}
