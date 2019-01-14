using System;
using System.Collections.Generic;

namespace MyExercisePlan.Entities
{
    public partial class U1UserNotification
    {
        public int UserNotificationId { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Severity { get; set; }
        public bool IsActive { get; set; }

        public U1UserNotification(int userNotificationId, int userId, string title, string description, int severity, bool isActive)
        {
            UserNotificationId = userNotificationId;
            UserId = userId;
            Title = title;
            Description = description;
            Severity = severity;
            IsActive = isActive;
        }

        public U1UserNotification()
        {

        }
    }
}
