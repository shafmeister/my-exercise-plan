using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyExercisePlan.Models.User;

namespace MyExercisePlan.ViewModels.User
{
    public class UserinfoResponseModel
    {
        public Boolean AuthenticationSuccess { get; set; }
        public string Username { get; set; }
        public List<ApplicationNotification> Notifications { get; set; }

        public UserinfoResponseModel(Boolean authenticationSuccess, string username, List<ApplicationNotification> notifications)
        {
            AuthenticationSuccess = authenticationSuccess;
            Username = username;
            Notifications = notifications;
        }
    }
}
