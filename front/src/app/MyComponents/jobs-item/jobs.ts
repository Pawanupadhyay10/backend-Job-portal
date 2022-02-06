import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobsItemComponent } from './jobs-item.component';

describe('jobsItemComponent', () => {
  let component: jobsItemComponent;
  let fixture: ComponentFixture<jobsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jobsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
