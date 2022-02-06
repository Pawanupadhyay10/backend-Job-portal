import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { jobs } from 'src/app/jobs';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddjobsComponent implements OnInit {
  title:string;
  desc:string;
  @Output() jobsAdd: EventEmitter<jobs> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const jobs = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.jobsAdd.emit(jobs);

  }

}
