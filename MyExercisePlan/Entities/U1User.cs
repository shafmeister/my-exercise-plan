using System;
using System.Collections.Generic;

namespace MyExercisePlan.Models
{
    public partial class U1User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public int? FailedAttempts { get; set; }
        public int? UserAccessId { get; set; }
    }
}
