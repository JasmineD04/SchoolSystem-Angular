import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }
  images=[
    "assets/images/cr1.jpg",
    "assets/images/cr2.jpg",
    "assets/images/cr3.jpg",
  ]

  ngOnInit(): void {
  }

}
