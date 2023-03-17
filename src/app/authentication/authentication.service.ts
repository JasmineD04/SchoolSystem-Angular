import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  addTeacher(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addTeacher`,body)
  }

  addParent(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addParent`,body)
  }

  validateTeacherUserName(user:String):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/checkName/${user}`);
  }

  validateParentUserName(user:String):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/checkParentName/${user}`);
  }

  parentLogin(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/loginParent`,
    body)
  }

  teacherLogin(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/loginTeacher`,
    body)
  }
}
