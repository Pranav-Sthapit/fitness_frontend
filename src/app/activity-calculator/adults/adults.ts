import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity-service';

@Component({
  selector: 'app-adults',
  imports: [ReactiveFormsModule],
  templateUrl: './adults.html',
  styleUrl: '../activity-calculator.css',
})
export class Adults {

  constructor(private activityService:ActivityService){}

  @Output() goPrev=new EventEmitter<void>();

  prev(){
    this.goPrev.emit();
  }


  
  adultForm=new FormGroup({
    cardioType:new FormControl('normal',Validators.required),
    cardio:new FormControl('',Validators.required),
    muscle:new FormControl('',Validators.required),
  })

  onSubmit(){

    const arr=["cardio","muscle"]
    let valid=true;
    for(let c of arr){
      if(this.adultForm.get(c)?.invalid){
        valid=false;
        break;
      }
    }
    if(!valid){
      alert("Enter all fields correctly");
      return;
    }

    this.activityService.adultActivity(this.adultForm).subscribe({
      next:(res)=>{
        alert(res.message);
      },
      error:(err)=> console.error(err)
    });
    
  }
}
