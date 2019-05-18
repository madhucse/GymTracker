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
        CaseStudySBAEntities objcontext = new CaseStudySBAEntities();

        public IHttpActionResult Get()
        {
            return Ok(objcontext.Workout_Category.ToList());
        }

        public IHttpActionResult Post(Workout_Category obj)
        {
            objcontext.Workout_Category.Add(obj);
            int  NoOfRowsEffected= objcontext.SaveChanges();
            if (NoOfRowsEffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Not Exist");
            }

        }
        public IHttpActionResult Put(Workout_Category obj)
        {
            objcontext.Workout_Category.Attach(obj);
            objcontext.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            int  NoOfRowsEffected = objcontext.SaveChanges();
            if (NoOfRowsEffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Not Exist");
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var obj =objcontext.Workout_Category.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            objcontext.Workout_Category.Remove(obj);
            int NoOfRowsEffected= objcontext.SaveChanges();
            if (NoOfRowsEffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Not Found");
            }
        }
    }
}
