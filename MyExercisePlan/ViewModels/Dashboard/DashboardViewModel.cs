using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

namespace MyExercisePlan.ViewModels.Dashboard
{

    public class DashboardResponseModel
    {
        public String Message { get; set; }

        public DashboardResponseModel(String message) {
            Message = message;
        }
    }
}
