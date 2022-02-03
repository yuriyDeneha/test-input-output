import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDeleteComponent } from './students-delete.component';

describe('StudentsDeleteComponent', () => {
  let component: StudentsDeleteComponent;
  let fixture: ComponentFixture<StudentsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
