import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }


  icons={
    envelopeIcon:faEnvelope,
    keyIcon:faKey,
  }

  
  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard/teacher"])
  }

  signIn():void{
    this.router.navigate(["teachersign"])
  }
}
