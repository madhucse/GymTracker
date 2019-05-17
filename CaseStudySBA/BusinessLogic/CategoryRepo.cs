using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
   public class CategoryRepo
    {

        CaseStudySBAEntities ObjContext;
        public CategoryRepo()
        {

            ObjContext = new CaseStudySBAEntities();

        }

        public IEnumerable<Workout_Category> GetAll()
        {
            try
            {
                var ObjCat = from obj in ObjContext.Workout_Category
                             select obj;

                return ObjCat.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
