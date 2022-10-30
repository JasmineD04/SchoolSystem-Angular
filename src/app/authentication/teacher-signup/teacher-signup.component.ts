import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard"])
  }

}
