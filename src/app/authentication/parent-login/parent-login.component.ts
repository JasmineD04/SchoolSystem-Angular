import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {

  constructor(private router: Router) { }

  icons={
    userIcon:faUser,
    envelopeIcon:faEnvelope,
    keyIcon:faKey,
  }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard/parent"])
  }

  signIn():void{
    this.router.navigate(["parentsign"])
  }

}
