import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'https://62712659e1c7aec428fcb278.mockapi.io/api/v1/cities';

  constructor(private http: HttpClient) { }

 getProjectsInfo(): Observable<any> {
    return this.http.get(this.url);
 }

}
