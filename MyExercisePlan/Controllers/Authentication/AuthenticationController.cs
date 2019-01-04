using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Controllers.Authentication;
using MyExercisePlan.Models.Authentication;
using MyExercisePlan.ViewModels.Authentication;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Net.Http.Headers;
using System.Diagnostics;
using MyExercisePlan.Models.User;

namespace WorkoutTracker.Controllers.Authentication
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
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
                if(Username != null)
                {
                    UserNotification notification1 = new UserNotification(1, "Test1", "This is a test1", 1);
                    UserNotification notification2 = new UserNotification(2, "Test2", "This is a test2", 2);
                    UserNotification notification3 = new UserNotification(3, "Test3", "This is a test3", 3);
                    List<UserNotification> notificationList = new List<UserNotification>();
                    notificationList.Add(notification1);
                    notificationList.Add(notification2);
                    notificationList.Add(notification3);
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

        // GET api/login/login
        [HttpPost("login")]
        public JsonResult Login(LoginViewModel viewModel)
        {
            //Attempt to Signin user and create token
            String token = _userManager.SignIn(viewModel.Username, viewModel.Password, false);

            if(token != null)
            {
                //Attach cookie, create response model and send
                Response.Cookies.Append("access_token", token);
                LoginResponseModel SuccessResponse = new LoginResponseModel(true, "", viewModel.Username);
                return Json(SuccessResponse);
            }
            else
            {
                //Create response model and send
                LoginResponseModel FailureResponse = new LoginResponseModel(false, "Username and/or password is incorrect.");
                return Json(FailureResponse);
            }
        }

        // POST api/login/register
        [HttpPost("register")]
        public JsonResult Register(RegisterViewModel viewModel)
        {
            ApplicationUser user = new ApplicationUser(0, viewModel.Username, viewModel.Password, viewModel.Firstname, viewModel.Middlename, viewModel.Lastname, viewModel.State, viewModel.City);
            Boolean UserCreated = _userManager.CreateUser(user);

            if (UserCreated)
            {
                //Signin user, create token and attach to response
                String token = _userManager.SignIn(viewModel.Username, null, true);
                Response.Cookies.Append("access_token", token);
                
                //Create response model and send
                RegisterResponseModel SuccessResponse = new RegisterResponseModel(true, "");
                return Json(SuccessResponse);
            }
            else
            {
                //Create response model and send
                RegisterResponseModel RegistrationFailureResponse = new RegisterResponseModel(false, "Username is already taken.");
                return Json(RegistrationFailureResponse);
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
