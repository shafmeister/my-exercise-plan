using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Models.Authentication;

namespace WorkoutTracker.Controllers
{
    [Route("[controller]")]
    public class LoginController : Controller
    {
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
            LoginResponse Response = LoginResponse.AuthenticateUser(Username, Password);

            return Ok(Json(Response));
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
