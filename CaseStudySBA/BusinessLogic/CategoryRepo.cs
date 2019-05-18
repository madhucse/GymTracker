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

        public void add(Workout_Category item)
        {
            try
            {
                ObjContext.Workout_Category.Add(item);
                ObjContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void Delete(int id)
        {
            Console.WriteLine("enter the id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                var ObjCat = (from obj in ObjContext.Workout_Category
                              where obj.category_id == Id
                              select obj).First();
                ObjContext.Workout_Category.Remove(ObjCat);
                ObjContext.SaveChanges();


            }
            catch (Exception ex)
            {
                throw  ex;
            }
        }



        public void Edit(Workout_Category item)
        {

            try
            {
                var ObjEmployee = (from obj in ObjContext.Workout_Category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjEmployee.category_name = item.category_name;
                ObjContext.SaveChanges();

            }

            catch (Exception ex)
            {
                throw ex;
            }

        }
    }

}
