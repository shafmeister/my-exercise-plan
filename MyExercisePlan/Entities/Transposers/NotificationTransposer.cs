using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyExercisePlan.Models.User;

namespace MyExercisePlan.Entities.Transposers
{
    public class NotificationTransposer
    {
        public ApplicationNotification TransposeEntity(U1UserNotification notification)
        {
            //Create new ApplicationNotification from U1UserNotification Entity
            ApplicationNotification applicationNotification = new ApplicationNotification(
                notification.UserNotificationId,
                notification.UserId,
                notification.Title,
                notification.Description,
                notification.Severity,
                notification.IsActive
                );

            return applicationNotification;
        }

        public U1UserNotification TransposeModel(ApplicationNotification notification)
        {
            //Create new ApplicationNotification from U1UserNotification Entity
            U1UserNotification dbNotification = new U1UserNotification(
                notification.UserNotificationID,
                notification.UserID,
                notification.Title,
                notification.Description,
                notification.Severity,
                notification.IsActive
                );

            return dbNotification;
        }
    }
}
