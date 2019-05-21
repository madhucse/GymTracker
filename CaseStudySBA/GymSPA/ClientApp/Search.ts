import { Pipe, PipeTransform } from "@angular/core";
import { Category } from "./src/app/Category";

@Pipe({ name: 'filter' })
export class Filterpipe implements PipeTransform {
  transform(category: Category[], searchTerm: string): Category[] {
    if (searchTerm.length == 0) {
      return category;
    }
    else {
      return category.filter(item => item.category_name.toLowerCase() == searchTerm);
    }
  }
}


