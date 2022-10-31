import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-reports',
  templateUrl: './home-reports.component.html',
  styleUrls: ['./home-reports.component.css']
})
export class HomeReportsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["reportview"])
  }

}
