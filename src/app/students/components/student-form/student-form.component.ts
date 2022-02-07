import { Student } from './../../models/student.model';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../models/student.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {

  @Input() student = new Student();
  @Output() submitted = new EventEmitter();

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('----ngOnChanges')
    if (changes && changes.student && this.student){
      this.updateForm(this.student)
    }
  }

  initForm() {
    this.studentForm = this.fb.group({
      id: [Student.generateId(), Validators.required],
      name: ['', Validators.required],
      aboutMe: ['', Validators.required],
      age: [0, Validators.required],
      favouriteColor: ['', Validators.required],
      birthday: [new Date(), Validators.required],
      gender: [Gender.PreferNotToSay, Validators.required],
    });
  }

  submit() {
    const student: Partial<Student> = this.studentForm.value;

    this.submitted.emit(student);
  }


  get Gender() {
    return Gender;
  }

  updateForm(student: Student) {
    console.log(student);
    this.studentForm.patchValue({
      ... student,
      birthday: this.datePipe.transform(student.birthday, 'yyyy-MM-dd')
    });
  }

}
