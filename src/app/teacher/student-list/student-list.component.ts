import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAward, faBuilding, faDollarSign, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsData!:any[]
  RollNo!:number

  icons={
    studentIcon:faUserGraduate,
    awardIcon:faAward,
    departmentIcon:faBuilding,
    revenueIcon:faDollarSign
  }

  constructor(private teacherService:TeacherService,
              private router:Router) { }

 

  ngOnInit(): void {
    this.teacherService.fetchAllStudents().subscribe((value:any)=>{
      this.studentsData=value;
      console.log(value)
    })
  }

  parameters(rollNo:number){
      this.RollNo=rollNo
      console.log(this.RollNo)
      this.router.navigate(["/parameters",this.RollNo])
  }

}