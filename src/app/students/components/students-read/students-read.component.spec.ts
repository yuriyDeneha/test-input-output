import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsReadComponent } from './students-read.component';

describe('StudentsReadComponent', () => {
  let component: StudentsReadComponent;
  let fixture: ComponentFixture<StudentsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
