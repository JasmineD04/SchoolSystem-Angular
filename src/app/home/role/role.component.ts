import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["dashboard/teacher"])
  }

  tlogIn():void{
    this.router.navigate(["login"])
  }
  plogIn():void{
    this.router.navigate(["parentlogin"])
  }


}
