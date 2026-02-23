import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity-service';

@Component({
  selector: 'app-children',
  imports: [ReactiveFormsModule],
  templateUrl: './children.html',
  styleUrl: '../activity-calculator.css',
})
export class Children {

  constructor(private activityService:ActivityService){}

  @Output() goPrev=new EventEmitter<void>();

  prev(){
    this.goPrev.emit();
  }

  childrenForm=new FormGroup({
    cardio:new FormControl('',Validators.required),
    muscle:new FormControl('',Validators.required),
    bone:new FormControl('',Validators.required),
  })

  onSubmit(){

    const arr=["cardio","muscle","bone"]
    let valid=true;
    for(let c of arr){
      if(this.childrenForm.get(c)?.invalid){
        valid=false;
        break;
      }
    }
    if(!valid){
      alert("Enter all fields correctly");
      return;
    }

    this.activityService.childernActivity(this.childrenForm).subscribe({
      next:(res)=>{
        alert(res.message);
      },
      error:(err)=> console.error(err)
    });
    
  }
}
