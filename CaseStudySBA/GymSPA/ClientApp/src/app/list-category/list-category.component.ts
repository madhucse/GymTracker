import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../Category';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  category: Category[];
  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.category = data,
      (error) => alert('error processsing request')
    );

  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new Category(0, $event)).subscribe(
      (data) => alert('Added'),
      (error) => alert('Failed to add')
    );
  }
}
