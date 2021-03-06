import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Category } from './Category';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CategoryService {

  private _url = 'http://localhost:63218/api/Category';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Category[]>{

    return this.http.get<Category[]>(this._url);
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(this._url + `/${id}`);
  }

  save(cat: Category) {
    return this.http.post(this._url, cat);
  }

  update(cat: Category) {
    return this.http.put(this._url, cat);
  }

  delete(id: string) {
    return this.http.delete<Category>(this._url + `/${id}`);
  }

}
