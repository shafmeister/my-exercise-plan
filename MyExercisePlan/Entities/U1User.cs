using System;
using System.Collections.Generic;
using MyExercisePlan.Entities;

namespace MyExercisePlan.Entities
{
    public partial class U1User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public int? FailedAttempts { get; set; }
        public int? UserAccessId { get; set; }

        public U1User(int userid, string username, string password, string firstname, string middlename, string lastname, string state, string city)
        {
            UserId = userid;
            Username = username;
            Password = password;
            Firstname = firstname;
            Middlename = middlename;
            Lastname = lastname;
            State = state;
            City = city;
        }

        public U1User()
        {

        }

        public U1User AddToDb(U1User user)
        {
            try
            {
                using (ApplicationDataContext _db = new ApplicationDataContext())
                {
                    _db.U1User.Add(user);
                    _db.SaveChanges();
                    return user;
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("Error adding user: " + user.Username);
                Console.Error.Write(ex.Message);
                return new U1User();
            }
        }
    }
}
