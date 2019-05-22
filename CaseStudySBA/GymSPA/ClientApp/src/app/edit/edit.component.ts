import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,Validators, NgForm } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Workout } from '../../../Workout';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Category';
@Component({

  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  click: number = 0;
  frmCat: FormGroup;
    category: Category[];
  constructor(private fb: FormBuilder, private service: WorkoutService, private currentRoute: ActivatedRoute, private service1: CategoryService
  ) { }

  ngOnInit() {
  this.frmCat = this.fb.group({
    Title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Note: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Calory: new FormControl(''),
    Category: new FormControl(''),
    WorkoutId: new FormControl('')
  });
  let id = this.currentRoute.snapshot.paramMap.get('id');
  this.service.getById(id).subscribe(
    (data) => {
      console.log(data);
      this.f.Title.setValue(data.workout_title);
      this.f.Note.setValue(data.workout_note);
      this.f.Calory.setValue(data.calories_burn_per_min);
      this.f.Category.setValue(data.category_id);
      this.f.WorkoutId.setValue(data.workout_id);
    },
    (error) => alert('Not Found')
    );

    this.service1.getAll().subscribe(
      (data) => this.category = data,
      (error) => alert('error processsing request'));

  }

  Add() {
    this.click = this.click + 0.1;
    this.f.Calory.setValue(this.click);
  }

  Minus() {
    if (this.click > 0) {
      this.click = this.click - 0.1;
    }
    else this.click = 0;
    this.f.Calory.setValue(this.click);
  }


  get f() {
    return this.frmCat.controls;
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let work = new Workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Category, 0);
      console.log(work);
      this.service.save(work).subscribe(
        (data) => alert("Added"),
        (error) => alert("failed to Add")
      );
    }

}

}
