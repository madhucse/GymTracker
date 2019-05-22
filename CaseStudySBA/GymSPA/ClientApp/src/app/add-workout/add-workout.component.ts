import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { WorkoutService } from '../workout.service';
import { Workout } from '../../../Workout';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  click: number = 0;
  frmCat: FormGroup;
  category: Category[];
  constructor(private fb: FormBuilder, private service: CategoryService, private service1:WorkoutService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Note: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Calory: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required])

    });

    this.service.getAll().subscribe(
      (data) => this.category = data,
      (error) => alert('error processsing request'));

  }

 get f() {
    return this.frmCat.controls;
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

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let work = new Workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Category, 0);
      console.log(work);
      this.service1.save(work).subscribe(
        (data) => alert("Added"),
        (error) => alert("failed to Add")
      );
   }

      
    }
      
    }
  
 
 












