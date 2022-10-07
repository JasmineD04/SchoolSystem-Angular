import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  standards=['VII','IX','X']
  student={
    firstName:'',
    lastName:'',
    standard:'',
  }

  ngOnInit(): void {
  }
  onSubmit(studentform:any):void{
    console.log("Hello",studentform)
  }

  resetForm(studentForm:any):void{
    studentForm.reset();
    console.log("Values reset: ",studentForm.value)
  }
}
