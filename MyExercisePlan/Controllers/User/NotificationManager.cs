using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyExercisePlan.Entities;
using MyExercisePlan.Entities.Transposers;
using MyExercisePlan.Models.User;

namespace MyExercisePlan.Controllers.User
{
    public class NotificationManager
    {
        NotificationTransposer _notificationTransposer = new NotificationTransposer();
        
        public List<ApplicationNotification> GetApplicationNotifications(string username)
        {
            List<U1UserNotification> userNotification = 

            List<ApplicationNotification> applicationNotifications = 
        }
    }
}
