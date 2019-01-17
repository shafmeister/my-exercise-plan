using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.ViewModels.User
{
    public class ClearNotificationResponseModel
    {
        bool ClearSuccess { get; set; }
        string ResponseMessage { get; set; }

        public ClearNotificationResponseModel(bool clearSuccess, string responseMessage)
        {
            ClearSuccess = clearSuccess;
            ResponseMessage = responseMessage;
        }
    }
}
