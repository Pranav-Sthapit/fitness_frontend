import { Component,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityService } from '../../services/activity-service';

@Component({
  selector: 'app-seniors',
  imports: [ReactiveFormsModule],
  templateUrl: './seniors.html',
  styleUrl: '../activity-calculator.css',
})
export class Seniors {

  constructor(private activityService:ActivityService){}

  @Output() goPrev=new EventEmitter<void>();

  prev(){
    this.goPrev.emit();
  }


  
  seniorForm=new FormGroup({
    cardioType:new FormControl('normal',Validators.required),
    cardio:new FormControl('',Validators.required),
    muscle:new FormControl('',Validators.required),
    balance:new FormControl('',Validators.required)
  })

  onSubmit(){

    const arr=["cardio","muscle","balance"]
    let valid=true;
    for(let c of arr){
      if(this.seniorForm.get(c)?.invalid){
        valid=false;
        break;
      }
    }
    if(!valid){
      alert("Enter all fields correctly");
      return;
    }
    
    this.activityService.seniorActivity(this.seniorForm).subscribe({
      next:(res)=>{
        alert(res.message);
      },
      error:(err)=> console.error(err)
    });
    
  }
}
