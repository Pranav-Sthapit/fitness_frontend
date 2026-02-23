import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-display',
  imports: [NgIf],
  templateUrl: './result-display.html',
  styleUrl: './result-display.css',
})
export class ResultDisplay implements OnInit{
  receivedData:any;
  constructor(private router:Router){}

  ngOnInit():void{
    this.receivedData = history.state.data;
    console.log(this.receivedData);

  }
  goBack() {
    this.router.navigate(['/home']); // navigate back to home or previous page
  }
}
