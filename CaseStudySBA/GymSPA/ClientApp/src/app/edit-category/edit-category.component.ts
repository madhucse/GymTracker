import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  public click: boolean = false;
  frmCat: FormGroup;
  @Output() EditAdded = new EventEmitter<Category>();
  @Output() Deleted = new EventEmitter<Category>();
  @Input() NameAdd:Category;

  constructor(private fb:FormBuilder,private service:CategoryService) { }

  get f() {
    return this.frmCat.controls;
  }

  ngOnInit() {
    this.frmCat = this.fb.group({
      category_name: new FormControl(this.NameAdd.category_name, [Validators.required, Validators.minLength(3)])
    });
    console.log(this.NameAdd);
  }

  public Enable(): void {
    
    this.f.category_name.enable();
    this.click = true;
  }

 

  saveForm(frm: NgForm) {
   
    if (frm.valid) {
      let Cat = new Category(this.NameAdd.category_id, frm.value.category_name);
      this.EditAdded.emit(Cat);
      this.f.category_name.disable();
      this.click = false;
    }
  }

  deleteForm(frm: NgForm)
    {
    let Cat = new Category(this.NameAdd.category_id, frm.value.category_name);
    this.Deleted.emit(Cat);
    }

}
