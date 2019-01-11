using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.User
{
    
    public class ApplicationNotification
    {
        public int UserNotificationID { get; set; }
        public int UserID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Severity { get; set; }
        public bool IsActive { get; set; }

        public ApplicationNotification(int userNotificationID, int userID, string title, string description, int severity, bool isActive)
        {
            UserNotificationID = userNotificationID;
            UserID = userID;
            Title = title;
            Description = description;
            Severity = severity;
            IsActive = isActive;
        }
    }
}
