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
        public IActionResult Register(RegisterViewModel viewModel)
        {
            ApplicationUser user = new ApplicationUser(0, viewModel.Username, viewModel.Password, viewModel.Firstname, viewModel.Middlename, viewModel.Lastname, viewModel.State, viewModel.City);
            ApplicationUser result = _userManager.CreateUser(user);

            if (result.IsPersisted())
            {
                Console.WriteLine("Successful");
                //_signManager.SignInAsync(user, false);
                return Redirect("Home");
            }
            else
            {
                Console.WriteLine("Faulted");
                return Redirect("Login");
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
