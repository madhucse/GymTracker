using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogic;


namespace Service.Controllers
{
    public class CategoryController : ApiController
    {
        CaseStudySBAEntities obj = new CaseStudySBAEntities();

        public IHttpActionResult Get()
        {
            return Ok(obj.Workout_Category.ToList());
        }
    }
}
