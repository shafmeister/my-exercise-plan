using Microsoft.AspNetCore.Identity;
using MyExercisePlan.Entities.Transposers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.Authentication
{
    public class ApplicationUser
    {
        public int UserID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        
        public ApplicationUser(int userid, string username, string password, string firstname, string middlename, string lastname, string state, string city)
        {
            UserID = userid;
            Username = username;
            Password = password;
            Firstname = firstname;
            Middlename = middlename;
            Lastname = lastname;
            State = state;
            City = city;
        }

        public Boolean IsPersisted()
        {
            if(UserID != 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
