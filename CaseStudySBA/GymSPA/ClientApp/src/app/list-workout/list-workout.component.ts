import { Component, OnInit } from '@angular/core';
import { Workout } from '../../../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-list-workout',
  templateUrl: './list-workout.component.html',
  styleUrls: ['./list-workout.component.css']
})
export class ListWorkoutComponent implements OnInit {
  work: string = '';
  workout: Workout[];
  constructor(private service: WorkoutService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.workout= data,
      (error) => alert('error processsing request')
    );
  }


  Edited($event) {
    this.service.update($event).subscribe(
      (data) => alert('Updated'),
      (error) => alert('Failed to update'));

  }

}
