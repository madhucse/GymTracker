import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  frmCat: FormGroup;
  @Output() CategoryAdded = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private service: CategoryService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      category_name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
   
  }

  get f() {
    return this.frmCat.controls;
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      this.CategoryAdded.emit(frm.value.category_name);
      alert(frm.value.category_name);
    }
  }


}
