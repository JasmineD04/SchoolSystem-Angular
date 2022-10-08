import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  studentForm!:FormGroup;
  standards=['VIII','IX','X'];
  ngOnInit(): void {
    this.createForm();
  }

  databaseValues={  
    firstName:"jasmine",
    lastName:"dhirwani",
  
  }

  updateName(){

    // setValue will require keys for all controls
    // this.studentForm.patchValue({
    //   ...this.databaseValues,
    //   std:"X"
    // })

    this.studentForm.get("firstName")?.setValue("update")
  }

  get formControls(){
    return this.studentForm.controls;
  }

  // set variableName(value){
  //   //set value here
  // }

  createForm(){
    this.studentForm=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      std:new FormControl(''),
    })
  }

  submitForm(){
    console.warn(this.studentForm.value)
    console.warn(this.studentForm)
    console.warn(this.studentForm.get('firstName')?.value)
    // single control ka value kaise nikalte hai....using the above statement , ? isliye daala hai beacause kabhi kabhi null bhi ho skta hai and null k value p error aata hai , to avoid that error , ? daalte hai
    console.warn(this.studentForm.controls["fistName"]?.value)
    // above statement will return undefined ,firstName k jagha fistName likha hai , which does not exist , therefor error na de isliye ? daala hai
  }
}
