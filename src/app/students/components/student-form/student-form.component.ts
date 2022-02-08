import { Student } from './../../models/student.model';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../models/student.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() student = new Student();
  @Output() submitted = new EventEmitter();
  @ViewChild('form') formRef: ElementRef;

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.initForm();
    console.log('----constructor')
  }

  ngOnInit(): void {
    console.log('----ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('----ngOnChanges')
    if (changes && changes.student && this.student){
      this.updateForm(this.student)
    }
  }

  ngAfterViewInit() {
    console.log('----ngAfterViewInit')
    this.formRef.nativeElement.style.opacity = 0.5
  }

  ngOnDestroy() {
    console.log('----ngOnDestroy');
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
    this.studentForm.patchValue({
      ... student,
      birthday: this.datePipe.transform(student.birthday, 'yyyy-MM-dd')
    });
  }

}
