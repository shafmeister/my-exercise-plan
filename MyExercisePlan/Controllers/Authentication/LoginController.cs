using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Controllers.Authentication;
using MyExercisePlan.Models.Authentication;

namespace WorkoutTracker.Controllers.Authentication
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private SignInManager<ApplicationUser> _signManager;
        private UserManager<ApplicationUser> _userManager;

        public LoginController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signManager)
        {
            _userManager = userManager;
            _signManager = signManager;
        }

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

        // POST api/login/auth
        [HttpPost("auth")]
        public IActionResult Auth([FromForm]string Username, [FromForm]string Password)
        {
            ApplicationUser user = new ApplicationUser { UserName = Username };
            var result = _userManager.CreateAsync(user, Password);
            LoginResponse Response = LoginResponse.AuthenticateUser(Username, Password);

            return Ok(Json(Response));
        }

        // POST api/login/register
        [HttpPost("register")]
        public IActionResult Register([FromForm]string Username, [FromForm]string Password)
        {
            ApplicationUser user = new ApplicationUser { UserName = Username };
            var result = _userManager.CreateAsync(user, Password);

            if (result.IsCompletedSuccessfully)
            {
                _signManager.SignInAsync(user, false);
                return Redirect("Home");
            }
            if (result.IsFaulted)
            {

            }
            return BadRequest();
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
