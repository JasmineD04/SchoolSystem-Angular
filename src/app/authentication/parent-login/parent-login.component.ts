import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard"])
  }

  signIn():void{
    this.router.navigate(["parentsign"])
  }

}
