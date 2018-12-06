using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.ViewModels.Authentication
{
    public class LoginResponseModel
    {
        public Boolean LoginSuccess { get; set; }
        public String ErrorMessage { get; set; }
        public int FailedAttempts { get; set; }

        public LoginResponseModel(Boolean loginSuccess, String errorMessage, int failedAttempts = 0)
        {
            LoginSuccess = loginSuccess;
            ErrorMessage = errorMessage;
            FailedAttempts = failedAttempts;
        }
    }
}
