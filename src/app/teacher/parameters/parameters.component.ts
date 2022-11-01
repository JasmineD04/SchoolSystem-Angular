import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor(private router:Router) { }
  values=['1','2','3','4','5'];

  ngOnInit(): void {
  }

  redirect():void{
    this.router.navigate(["record"])
  }

}
