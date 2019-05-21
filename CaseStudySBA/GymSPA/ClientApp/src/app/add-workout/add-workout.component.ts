import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  click: number = 0;
  frmCat: FormGroup;
  category: Category[];
  constructor(private fb: FormBuilder, private service: CategoryService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Note: new FormControl('', [Validators.required, Validators.minLength(80)]),
      Calory: new FormControl(''),
      Category:new FormControl('')

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
     
      console.log(frm.value);
    }

      
    }
      
    }
  
 
 












