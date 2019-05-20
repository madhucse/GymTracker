import { Component, OnInit,Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  public click: boolean = true;
  frmCat: FormGroup;
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
  }

  public Disable(): void {
    this.f.category_name.disable();
  }

}
