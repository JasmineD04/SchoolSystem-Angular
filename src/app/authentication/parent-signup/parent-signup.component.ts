import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard"])
  }

}
