﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

namespace MyExercisePlan.ViewModels.Authentication
{
    public class RegisterViewModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string City { get; set; }
        public string State { get; set; }
    }

    public class RegisterResponseModel
    {
        public Boolean RegistrationSuccess { get; set; }
        public String Token { get; set; }

        public RegisterResponseModel(Boolean registrationSuccess, String token) {
            RegistrationSuccess = registrationSuccess;
            Token = token;
        }
    }
}
