using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.ViewModels.User
{
    public class ClearNotificationViewModel
    {
        public int UserNotificationId { get; set; }

        public ClearNotificationViewModel(int userNotificationId)
        {
            UserNotificationId = userNotificationId;
        }

        public ClearNotificationViewModel()
        {

        }
    }
}
