import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(public httpClient:HttpClient) { }

    fetchCategories():Observable<any>
    {
      return this.httpClient.get(`${ApplicationConstants.APIURL}/categories`);
    }

    fetchParameters(CategoryID:number):Observable<any>{
      return this.httpClient.get(`${ApplicationConstants.APIURL}/parameters/${CategoryID}`);
    }

    fetchAllParameters():Observable<any>{
      return this.httpClient.get(`${ApplicationConstants.APIURL}/allParameters`);
    }

    updateValues(content:any){
       console.log(content) 
      return this.httpClient.post(`${ApplicationConstants.APIURL}/setAllParameters`,content);
    }

    addRating(body:any):Observable<any>{
      return this.httpClient.post(`${ApplicationConstants.APIURL}/insertRating/`,body)
    }

    fetchRatings(studentID:number):Observable<any>{
      return this.httpClient.get(`${ApplicationConstants.APIURL}/fetchRatings/${studentID}`);
    }

    fetchAllStudents(){
      return this.httpClient.get(`${ApplicationConstants.APIURL}/students`)
    }

    
}