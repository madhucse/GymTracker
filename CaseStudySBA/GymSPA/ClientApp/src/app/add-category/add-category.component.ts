import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  frmCat: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      category_id: new FormControl('',Validators.required),
      category_name:new FormControl('',[Validators.required,Validators.minLength(3)])
    });
  }

  get f() {
    return this.frmCat.controls;
  }
}
