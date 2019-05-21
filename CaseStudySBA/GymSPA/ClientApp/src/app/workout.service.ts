import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../../Workout';

@Injectable()
export class WorkoutService {

  private _url = 'http://localhost:63218/api/Workout';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Workout[]> {

    return this.http.get<Workout[]>(this._url);
  }

  getById(id: string): Observable<Workout> {
    return this.http.get<Workout>(this._url + `/${id}`);
  }

  save(work:Workout) {
    return this.http.post(this._url, work);
  }

  update(work: Workout) {
    return this.http.put(this._url, work);
  }

  delete(id: string) {
    return this.http.delete<Workout>(this._url + `/${id}`);
  }

}

