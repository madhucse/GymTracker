import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CategoryService } from '../category.service';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Workout } from '../../../Workout';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
export class EditWorkoutComponent implements OnInit {
 
  frmCat: FormGroup;
  @Input() WorkoutAdd: Workout;
  @Output() EditWorkout = new EventEmitter<Workout>();
  constructor(private fb: FormBuilder, private service: CategoryService, private service1: WorkoutService) { }

  get f() {
    return this.frmCat.controls;
  }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl(this.WorkoutAdd.workout_title, [Validators.required, Validators.minLength(5)])
    });
    console.log(this.WorkoutAdd);
  }

  saveForm(frm: NgForm) {

    if (frm.valid) {
      let work = new Workout(frm.value.workout_title, frm.value.workout_note,frm.value.colory,frm.value.category_id,frm.value.workout_id);
      this.EditWorkout.emit(work);
     }
  }

}
