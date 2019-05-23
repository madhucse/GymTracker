import { Pipe, PipeTransform } from "@angular/core";
import { Workout } from "./Workout";

@Pipe({ name: 'workoutfilter' })
export class Filterpipes implements PipeTransform {
  transform(workout: Workout[], searchTerm: string): Workout[] {
    if (searchTerm.length == 0) {
      return workout;
    }
    else {
      return workout.filter(item => item.workout_title.toLowerCase().startsWith(searchTerm.toLowerCase()));
    }
  }
}

