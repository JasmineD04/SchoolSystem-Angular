import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  constructor(private router: Router) { }

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey
  }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard/teacher"])
  }

}
