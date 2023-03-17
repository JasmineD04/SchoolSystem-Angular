import { Component, OnInit } from '@angular/core';
// import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faFrown, faHeart, faLaugh, faMeh, faSmile, faStar } from '@fortawesome/free-solid-svg-icons';
import { Categories } from 'src/app/shared/interfaces/Categories.interface';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  

  constructor(private router:Router,
  public teacherService:TeacherService,
  private activatedRoute:ActivatedRoute) { }

  categories!:Categories[];
  categoryName!:string;
  data!:any;
  parameters!:any
  object!:any;
  values!:any;
  newMap?:Map<Number,Number>=new Map();
  ratings!: any[];
  ParameterID:any;
  clicked: any;
  finalData!:Array<number>;
  paramsID!:any[];
  timepass:any={}
  ratingData!:any[];
  rollNo!:number;
  objectData!:any
  

  
  
  ngOnInit(): void {
    this.fetchCategories()
    this.fetchAllParameters()
    this.rollNo = this.activatedRoute.snapshot.params['rollNo']
    // this.newMap?.set(1,1)
  }
  icons={
    frownIcon:faFrown,
    mehIcon:faMeh,
    smileIcon:faSmile,
    laughIcon:faLaugh,
    heartIcon:faHeart,
    starIcon:faStar
  }

  fetchCategories(){
    this.teacherService.fetchCategories().subscribe((value:Categories[])=>{
        this.categories=value;
        console.warn(this.categories);
    })
  }


  fetchAllParameters():void{
    console.log("In fetchAllParams")
    this.teacherService.fetchAllParameters().subscribe((object:any)=>{
      this.object=object;
      console.log(object)
    })
  }


  redirect():void{
    this.router.navigate(["/record",this.rollNo])
  }

  // updateValues(ParameterID:number,Rating:number):void{

  //   // this.newMap.delete(1)
  //   console.log(ParameterID,Rating)
  //   // myMap[newKey] = newValue
  //   this.newMap?.set(ParameterID,Rating)
  //   this.timepass[ParameterID] = Rating;
  //   // this.insertRating(this.ParameterID,this.Rating)

  //   // this.paramsID.push(this.newMap.keys())
  //   // for(let key of this.newMap){
  //   //   this.paramsID.push(key)
  //   // }
  //   //  this.paramsID = Array.from(this.newMap.keys())
  //   //  this.ratings = Array.from(this.newMap.values())
  //   // this.ratings.push(this.newMap.values)
  //   // console.log(this.paramsID)
  //   // console.log(this.ratings)
  // }

  setData(categoryID:number,rollno:number,rate:number):void{
      const body={
        categoryId:categoryID,
        RollNo:rollno,
        ratingID:rate
      }
      // console.log(this.newMap)
      console.log(body)
      this.teacherService.addRating(body).subscribe(()=>
        console.log("insert hua")
    )
    // this.redirect()
  }

  fetchRatings(){
    this.teacherService.fetchRatings(this.rollNo).subscribe((value:any)=>{
        this.ratingData=value;
        console.warn(this.ratingData);
    })
  }

  submitForm(){
    this.router.navigate(["/record",this.rollNo])
  }
  
}


 
