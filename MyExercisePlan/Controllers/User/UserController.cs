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
                    
                    //ApplicationNotification notification1 = new ApplicationNotification(1, "Test1", "This is a test1, a really good test. Hopefully it works. I bet it will.", 1);
                    //ApplicationNotification notification2 = new ApplicationNotification(2, "Test2", "This is a test2", 2);
                    ApplicationNotification notification3 = new ApplicationNotification(3, "Test3", "This is a test3", 3);
                    List<ApplicationNotification> notificationList = new List<ApplicationNotification>();
                    //notificationList.Add(notification1);
                    //notificationList.Add(notification2);
                    notificationList.Add(notification3);
                    
                    UserinfoResponseModel SuccessResponse = new UserinfoResponseModel(true, Username, null);
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
    }
}
