import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {

  constructor(private router: Router) { }

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey
  }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard/parent"])
  }

}
