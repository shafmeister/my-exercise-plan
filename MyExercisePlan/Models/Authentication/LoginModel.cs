using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.Authentication
{

    public class LoginResponse
    {
        public UserViewModel UserVM;
        public ResponseViewModel ResponseVM;

        public LoginResponse(UserViewModel uservm, ResponseViewModel responsevm)
        {
            UserVM = uservm;
            ResponseVM = responsevm;
        }

        public static LoginResponse AuthenticateUser(string username, string password)
        {
            ApplicationDataContext db = new ApplicationDataContext();

            //Check if credentials are correct
            U1User AuthenticatedUser = db.U1User.Where(x => x.Username == username && x.Password == password).FirstOrDefault();
            if (AuthenticatedUser != null)
            {
                //set failed response equal to 0
                UserViewModel uservm = new UserViewModel(AuthenticatedUser.Username, AuthenticatedUser.Firstname, AuthenticatedUser.Lastname);
                ResponseViewModel responsevm = new ResponseViewModel(true, "Login successful", 0);
                return new LoginResponse(uservm, responsevm);
            }

            //Credentials aren't correct, check if user exists
            U1User NonAuthenticatedUser = db.U1User.Where(x => x.Username == username).FirstOrDefault();
            if (NonAuthenticatedUser != null)
            {
                //increment failed response
                UserViewModel uservm = null;
                ResponseViewModel responsevm = new ResponseViewModel(false, "The Password entered is not correct", NonAuthenticatedUser.FailedAttempts);
                return new LoginResponse(uservm, responsevm);
            }

            //User does not exist
            else
            {
                UserViewModel uservm = null;
                ResponseViewModel responsevm = new ResponseViewModel(false, "The Username entered does not exist", null);
                return new LoginResponse(uservm, responsevm);
            }
        }

        public class UserViewModel
        {
            public string Username { get; set; }
            public string Firstname { get; set; }
            public string Lastname { get; set; }
            public int ActiveNotifications { get; set; }

            public UserViewModel(string username, string firstname, string lastname)
            {
                Username = username;
                Firstname = firstname;
                Lastname = lastname;
            }
        }

        public class ResponseViewModel
        {
            public Boolean LoginSuccessful { get; set; }
            //Message to display in the user interface
            public string ResponseMessage { get; set; }
            public int? FailedAttempts { get; set; }

            public ResponseViewModel(Boolean loginsuccessful, string responsemessage, int? failedattempts)
            {
                LoginSuccessful = loginsuccessful;
                ResponseMessage = responsemessage;
                FailedAttempts = failedattempts;
            }
        }

       
    }

    


}
