using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyExercisePlan.Controllers.Authentication;
using MyExercisePlan.ViewModels.Dashboard;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyExercisePlan.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        // GET: api/<controller>
        
        [HttpGet("test")]
        public JsonResult Test()
        {
            string accessToken = Request.Cookies["access_token"];
            if (accessToken != null)
            {
                string Username = TokenAuthority.GetTokenClaims(accessToken);
                return Json(new DashboardResponseModel("Token validated, Username = " + Username));
            }
            else
            {
                return Json(new DashboardResponseModel("Token not validated"));
            }
        }
        

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
