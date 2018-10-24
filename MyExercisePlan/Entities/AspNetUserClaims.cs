using System;
using System.Collections.Generic;

namespace MyExercisePlan.Models
{
    public partial class AspNetUserClaims
    {
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public Guid UserId { get; set; }

        public AspNetUsers User { get; set; }
    }
}
