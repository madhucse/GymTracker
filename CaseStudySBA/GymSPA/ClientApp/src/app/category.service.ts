import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Category } from './Category';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CategoryService {

  private _url = "http://localhost:63218/api/Category";

  constructor(private http:HttpClient) { }

  getAll(): Observable<Category[]>{

    return this.http.get<Category[]>(this._url);
  }

  save(cat: Category) {
    return this.http.post(this._url, cat);
  }
}
