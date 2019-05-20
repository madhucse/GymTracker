import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  frmCat: FormGroup;
  constructor(private fb: FormBuilder, private service: CategoryService) {
  }

  ngOnInit() {
    this.frmCat = this.fb.group({
      category_name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
   
  }



  get f() {
        return this.frmCat.controls;
  }


 public text: string = 'Edit';
  public changeText(): void {
    if (this.text == 'Edit') {
      this.text = 'Update';
    }
    else this.text = 'Edit';
  }

}
