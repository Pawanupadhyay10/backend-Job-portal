import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { jobs } from 'src/app/jobs';

@Component({
  selector: 'app-jobs-item',
  templateUrl: './jobs-item.component.html',
  styleUrls: ['./jobs-item.component.css']
})
export class jobsItemComponent implements OnInit {
  @Input() jobs: jobs;
  @Input() i: number;
  @Output() jobsDelete: EventEmitter<jobs> = new EventEmitter();
  @Output() jobsCheckbox: EventEmitter<jobs> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(jobs: jobs){
    this.jobsDelete.emit(jobs);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(jobs){
    console.log(jobs)
    this.jobsCheckbox.emit(jobs);
  }
}
