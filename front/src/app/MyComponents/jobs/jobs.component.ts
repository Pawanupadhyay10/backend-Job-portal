import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';  
import { jobs } from "../../jobs";

@Component({
  selector: 'app-jobss',
  templateUrl: './jobss.component.html',
  styleUrls: ['./jobss.component.css']
})
export class jobssComponent implements OnInit {
  localItem: string;
  jobss:jobs[];
  constructor() { 
    this.localItem = localStorage.getItem("jobss");
    if(this.localItem == null){
    this.jobss = [];
    }
    else{ 
      this.jobss = JSON.parse(this.localItem); 
    }

   }

  ngOnInit(): void {
  }

  deletejobs(jobs:jobs){
    console.log(jobs);
    const index = this.jobss.indexOf(jobs);
    this.jobss.splice(index, 1);
    localStorage.setItem("jobss", JSON.stringify(this.jobss));
  }
  addjobs(jobs:jobs){
    console.log(jobs); 
    this.jobss.push(jobs); 
    localStorage.setItem("jobss", JSON.stringify(this.jobss));
  }
  togglejobs(jobs:jobs){ 
    const index = this.jobss.indexOf(jobs);
    console.log(index)
    this.jobss[index].active = !this.jobss[index].active;
    localStorage.setItem("jobss", JSON.stringify(this.jobss));
    
    console.log(jobs)
  }
}
