import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Student } from './shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  data:Student[]=[{
    "first_name": "Griff",
    "last_name": "Bradd",
    "email": "gbradd0@yellowbook.com",
    "gender": "Male",
    "contact": "994-133-3896"
  },{
    "first_name": "Antony",
    "last_name": "Tremathack",
    "email": "atremathack1@hugedomains.com",
    "gender": "Male",
    "contact": "253-646-9373"
  },{
    "first_name": "Geoffry",
    "last_name": "Pretti",
    "email": "gpretti2@tiny.cc",
    "gender": "Male",
    "contact": "577-711-5321"
  },{
    "first_name": "Bari",
    "last_name": "Yong",
    "email": "byong3@twitter.com",
    "gender": "Female",
    "contact": "951-157-1379"
  },{
    "first_name": "Rhys",
    "last_name": "Howling",
    "email": "rhowling4@amazon.co.uk",
    "gender": "Male",
    "contact": "130-813-8195"
  }]
  students!: Student[];
 constructor(private loggerService:LoggerService) { }
  
  fetchStudents():Student[]{
    console.log("fetching from student service")
    return this.students
  }

}
