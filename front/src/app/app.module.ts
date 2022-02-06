import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jobsComponent } from './MyComponents/jobs/jobs.component';
import { jobItemComponent } from './MyComponents/jobs-item/job-item.component';
import { AddjobComponent } from './MyComponents/add-job/add-job.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    jobsComponent,
    jobItemComponent,
    AddjobComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
