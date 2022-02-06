import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobssComponent } from './jobs.component';

describe('jobssComponent', () => {
  let component: jobssComponent;
  let fixture: ComponentFixture<jobssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jobssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
