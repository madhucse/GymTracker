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
  public click: boolean = false;
  frmCat: FormGroup;
  @Input() WorkoutAdd: Workout;
  @Output() EditWorkout = new EventEmitter<Workout>();
  @Output() DeleteWorkout = new EventEmitter<Workout>();
  constructor(private fb: FormBuilder, private service: CategoryService, private service1: WorkoutService) { }

  get f() {
    return this.frmCat.controls;
  }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl(this.WorkoutAdd.workout_title, [Validators.required, Validators.minLength(5)]),
      Note: new FormControl(this.WorkoutAdd.workout_note),
      Calory: new FormControl(this.WorkoutAdd.calories_burn_per_min),
      Category: new FormControl(this.WorkoutAdd.category_id),
      WorkoutId: new FormControl(this.WorkoutAdd.workout_id)
    });
    console.log(this.WorkoutAdd);
  }

 

  saveForm(frm: NgForm) {

    if (frm.valid) {
      let work = new Workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Category, frm.value.WorkoutId);
      this.EditWorkout.emit(work);
      this.click = false;
     }
  }

  deleteForm(frm: NgForm) {
    let work = new Workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Category, frm.value.WorkoutId);
    this.DeleteWorkout.emit(work);
  }

}
