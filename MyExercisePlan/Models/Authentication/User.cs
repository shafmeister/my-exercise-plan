using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.Authentication
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public int ActiveNotifications { get; set; }
        public int FailedAttempts { get; set; }

        public User(string username, string password, string firstname, string lastname, string email, string location, int failedattempts)
        {
            Username = username;
            Password = password;
            Firstname = firstname;
            Lastname = lastname;
            Email = email;
            Location = location;
            FailedAttempts = failedattempts;
        }

        

        public static User GetUser(string username, string password)
        {
            //db call
            User user = new User("matt3453", "red", "Matthew", "Shaffer", "matt34533@aol.com", "Arizona", 2);

            //!user.IsNotNullOrNothing()
            if (user != null)
            {
                if (user.Username == username && user.Password == password)
                {
                    //user.ResetFailedLogins();
                    return new User(user.Username, null, user.Firstname, user.Lastname, user.Email, user.Location, user.FailedAttempts);
                }
                else
                {
                    //user.IncrementFailedLogins();
                    return new User(user.Username, null, null, null, null, null, user.FailedAttempts);
                }
            }
            else
            {
                return null;
            }
        }
    }
}
