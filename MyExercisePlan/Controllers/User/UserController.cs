using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Controllers.Authentication;
using MyExercisePlan.Models.User;
using MyExercisePlan.ViewModels.User;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyExercisePlan.Controllers.User
{

    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private UserManager _userManager = new UserManager();
        private NotificationManager _notificationManager = new NotificationManager();

        // GET: login/auth
        [HttpGet("getuserinfo")]
        public JsonResult GetUserInfo()
        {
            string accessToken = Request.Cookies["access_token"];
            if (accessToken != null)
            {
                string Username = TokenAuthority.GetTokenClaims(accessToken);
                if (Username != null)
                {
                    List<ApplicationNotification> notificationList = _notificationManager.GetApplicationNotifications(Username);
                    
                    UserinfoResponseModel SuccessResponse = new UserinfoResponseModel(true, Username, notificationList);
                    return Json(SuccessResponse);
                    
                }
                else
                {
                    UserinfoResponseModel AuthenticationFailureResponse = new UserinfoResponseModel(false, "", null);
                    return Json(AuthenticationFailureResponse);
                }
            }
            else
            {
                UserinfoResponseModel NoTokenResponse = new UserinfoResponseModel(false, "", null);
                return Json(NoTokenResponse);
            }
        }

        [HttpGet("")]
    }
}
