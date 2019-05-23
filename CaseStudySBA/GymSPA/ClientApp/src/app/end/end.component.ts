import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  frmCat: FormGroup;
  constructor(private fb:FormBuilder,private service:WorkoutService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Comment: new FormControl('', [Validators.required, Validators.minLength(5)]),
      date: new FormControl(''),
      time: new FormControl(''),
    });
  }


  get f() {
    return this.frmCat.controls;
  }

}
