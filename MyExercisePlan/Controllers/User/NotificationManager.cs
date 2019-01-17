using System;
using System.Collections.Generic;
using System.Diagnostics;
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
            List<U1UserNotification> userNotifications = GetDbNotifications(username);

            List<ApplicationNotification> applicationNotifications = new List<ApplicationNotification>();

            foreach (U1UserNotification Notification in userNotifications)
            {
                ApplicationNotification applicationNotification = _notificationTransposer.TransposeEntity(Notification);

                applicationNotifications.Add(applicationNotification);
            }

            return applicationNotifications;
        }

        public List<U1UserNotification> GetDbNotifications(string username)
        {
            try
            {
                using (ApplicationDataContext _db = new ApplicationDataContext())
                {
                    List<U1UserNotification> UserNotifications =
                        (from Notifications in _db.U1UserNotification
                         join Users in _db.U1User on Notifications.UserId equals Users.UserId
                         where Users.Username == username
                         && Notifications.IsActive == true
                         select Notifications)
                        .ToList();

                    return UserNotifications;
                }
            }
            catch (Exception ex)
            {
                //TODO Log error 
                Debug.Print("--------------Error getting Notifications for user: " + username);
                Debug.Print(ex.Message);
                return null;
            }
        }

        public bool ClearNotification(string username, int notificationId)
        {
            try
            {
                using (ApplicationDataContext _db = new ApplicationDataContext())
                {
                    U1UserNotification NotificationToDeactivate =
                        (from Notifications in _db.U1UserNotification
                         join Users in _db.U1User on Notifications.UserId equals Users.UserId
                         where Users.Username == username
                         && Notifications.UserNotificationId == notificationId
                         select Notifications)
                         .FirstOrDefault();
                    Debug.Print("--------------Username: " + username);
                    Debug.Print("--------------NotificationID: " + notificationId);
                    if (NotificationToDeactivate != null)
                    {
                        NotificationToDeactivate.IsActive = false;
                        _db.SaveChanges();
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
                Debug.Print("--------------Error getting Notifications for user: " + username);
                Debug.Print(ex.Message);
                return false;
            }
        }
    }
}
