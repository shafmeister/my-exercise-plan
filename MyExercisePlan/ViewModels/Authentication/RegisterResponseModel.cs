using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExercisePlan.ViewModels.Authentication
{
    public class RegisterResponseModel
    {
        public Boolean RegistrationSuccess { get; set; }
        public String ErrorMessage { get; set; }

        public RegisterResponseModel(Boolean registrationSuccess, String errorMessage)
        {
            RegistrationSuccess = registrationSuccess;
            ErrorMessage = errorMessage;
        }
    }
}
