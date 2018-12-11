using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyExercisePlan.Models.User;

namespace MyExercisePlan.ViewModels.Authentication
{
    public class UserinfoResponseModel
    {
        public Boolean AuthenticationSuccess { get; set; }
        public string Username { get; set; }
        public List<UserNotification> Notifications { get; set; }

        public UserinfoResponseModel(Boolean authenticationSuccess, string username, List<UserNotification> notifications)
        {
            AuthenticationSuccess = authenticationSuccess;
            Username = username;
            Notifications = notifications;
        }
    }
}
