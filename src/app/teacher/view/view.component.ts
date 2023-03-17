import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images=[
    "assets/images/cr1.jpg",
    "assets/images/cr2.jpg",
    "assets/images/cr3.jpg",
  ]

  

}
