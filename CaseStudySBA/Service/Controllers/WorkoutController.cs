using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Service.Controllers
{
    public class WorkoutController : ApiController
    {
        CaseStudySBAEntities objcontext = new CaseStudySBAEntities();

        public IHttpActionResult Get()
        {
            return Ok(objcontext.Workout_Collection.ToList());
        }

        public IHttpActionResult Post(Workout_Collection obj)
        {
            objcontext.Workout_Collection.Add(obj);
            int NoOfRowsEffected = objcontext.SaveChanges();
            if (NoOfRowsEffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed Add Workout Category");
            }

        }

        public IHttpActionResult Put(Workout_Collection obj)
        {
            objcontext.Workout_Collection.Attach(obj);
            objcontext.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            int NoOfRowsEffected = objcontext.SaveChanges();
            if (NoOfRowsEffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed to Update Workout Category");
            }

        }


        public IHttpActionResult Delete(int id)
        {
            var obj = objcontext.Workout_Collection.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            objcontext.Workout_Collection.Remove(obj);
            int NoOfRowsEffected = objcontext.SaveChanges();
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
