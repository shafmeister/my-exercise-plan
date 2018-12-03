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

namespace WorkoutTracker.Controllers.Authentication
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private LoginManager _loginManager = new LoginManager();
        private UserManager _userManager = new UserManager();

        /*
        public LoginController(UserManager userManager, LoginManager loginManager)
        {
            _userManager = userManager;
            _loginManager = loginManager;
        }
        */

        // GET: login/auth
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "It", "works" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }


        // POST api/login/register
        [HttpPost("register")]
        public JsonResult Register(RegisterViewModel viewModel)
        {
            ApplicationUser user = new ApplicationUser(0, viewModel.Username, viewModel.Password, viewModel.Firstname, viewModel.Middlename, viewModel.Lastname, viewModel.State, viewModel.City);
            Boolean UserCreated = _userManager.CreateUser(user);

            if (UserCreated)
            {
                Debug.Print("------------------------Successful");
                //Create and attach token
                String token = _userManager.SignIn(viewModel.Username, null, true);
               if(token != null)
                {
                    Cookie tokenCookie = new Cookie("access_token", token);
                    Debug.WriteLine("--------------");
                    Debug.WriteLine(token);
                    Debug.WriteLine("--------------");
                    Response.Cookies.Append("access_token", token);
                }

                //Create response data and send
                RegisterResponseModel response = new RegisterResponseModel(true, "");
                return Json(response);
            }
            else
            {
                Debug.Print("------------------------Faulted");
                //Create response data and send
                RegisterResponseModel response = new RegisterResponseModel(false, "Username is already taken");
                return Json(response);
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
