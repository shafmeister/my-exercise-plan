using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.Models.User
{
    
    public class ApplicationNotification
    {
        public int UserNotificationID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Severity { get; set; }

        public ApplicationNotification(int userNotificationID, string title, string description, int severity)
        {
            UserNotificationID = userNotificationID;
            Title = title;
            Description = description;
            Severity = severity;
        }
    }
}
