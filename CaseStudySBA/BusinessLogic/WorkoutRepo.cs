using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    class WorkoutRepo
    {
        CaseStudySBAEntities ObjContext;
        public WorkoutRepo()
        {

            ObjContext = new CaseStudySBAEntities();

        }

        public IEnumerable<Workout_Collection> GetAll()
        {
            try
            {
                var ObjWork = from obj in ObjContext.Workout_Collection
                             select obj;

                return ObjWork.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void add(Workout_Collection item)
        {
            try
            {
                ObjContext.Workout_Collection.Add(item);
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
                var ObjWork = (from obj in ObjContext.Workout_Collection
                              where obj.workout_id == Id
                              select obj).First();
                ObjContext.Workout_Collection.Remove(ObjWork);
                ObjContext.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public void Edit(Workout_Collection item)
        {

            try
            {
                var ObjWork = (from obj in ObjContext.Workout_Collection
                              where obj.workout_id == item.workout_id
                              select obj).First();

                ObjWork.workout_title = item.workout_title;
                ObjWork.workout_note = item.workout_note;
                ObjWork.calories_burn_per_min = item.calories_burn_per_min;
                ObjWork.category_id = item.category_id;
                ObjContext.SaveChanges();

            }

            catch (Exception ex)
            {
                throw ex;
            }

        }





    }
    }

