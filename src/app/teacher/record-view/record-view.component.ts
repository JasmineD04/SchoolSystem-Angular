import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elements } from 'chart.js';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent implements OnInit {

  constructor(private teacherService:TeacherService,
    private activatedRoute:ActivatedRoute) { }

  ratingData!:any
  myData:any[] =[]
  rollNo!:number

  title = 'Progress Report';
  myType :any= 'PieChart';
  width = 750;
  height = 400;
  myOptions = {
    colors: ['#f5cac2', '#ed7966', '#303179', '#141850'],
    is3D: true
  };

  ngOnInit(): void {
    this.rollNo = this.activatedRoute.snapshot.params['rollNo']
    this.fetchRatings() 
    // console.log(this.rollNo)
  }

  
  fetchRatings(){
    console.log(this.rollNo)
    this.teacherService.fetchRatings(this.rollNo).subscribe((value:any)=>{
        // console.log(this.rollNo)
        console.log(value)
        this.ratingData=value;
        console.warn(this.ratingData);
        this.ratingData.forEach((elem:any)=>{
          let newElem:any=[
            elem.CategoryName,
            elem.finalData
            ]
          this.myData.push(newElem)
        })
        console.log(this.myData)
      })
  }

}
