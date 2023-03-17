import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  toasts:any=[];

  constructor() { }

  show(toasts:any){
    this.toasts.push(toasts);
  }
}
