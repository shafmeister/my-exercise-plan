using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

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
        public string City { get; set; }
        public string State { get; set; }
        public string Email { get; set; }
        public int? UserAccessId { get; set; }
        public int? FailedAttempts { get; set; }

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

        public Boolean Create()
        {
            try
            {
                using (ApplicationDataContext _db = new ApplicationDataContext())
                {
                    _db.U1User.Add(this);
                    _db.SaveChanges();
                    return true;
                }
            }
            catch (Exception ex)
            {
                //TODO Log error 
                Debug.Print("Error adding user: " + Username);
                Debug.Print(ex.Message);
                Debug.Print(ex.InnerException.ToString());
                return false;
            }
        }

        public Boolean Exists()
        {
            try
            {
                using (ApplicationDataContext _db = new ApplicationDataContext())
                {
                    int UserCount = _db.U1User.Where(r => r.Username == Username).Count();
                    Console.WriteLine(UserCount);
                    if (UserCount > 1)
                    {
                        //TODO Log error 
                        Debug.Print("Multiple users with the same username found");
                        return true;
                    }
                    else if (UserCount == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                //TODO Log error 
                Debug.Print("Error adding user: " + Username);
                Debug.Print(ex.Message);
                Debug.Print(ex.InnerException.ToString());
                return false;
            }
        }
    }
}
