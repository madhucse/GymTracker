import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  frmCat: FormGroup;
  constructor(private fb: FormBuilder, private service: WorkoutService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      Title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Comment: new FormControl('', [Validators.required, Validators.minLength(5)]),
      date: new FormControl(new Date().toISOString().substring(0, 10)),
      time: new FormControl(new Date().toISOString().substring(11,19)),
    });
   
  }

  get f() {
    return this.frmCat.controls;
  }


}
