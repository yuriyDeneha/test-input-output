import { StudentsService } from './../../services/students.service';
import { Gender, Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.scss']
})
export class StudentsUpdateComponent implements OnInit {

  student: Student;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: {student_id: string}) => {
      const studentId = params.student_id;
      this.getStudentById(studentId);
    })

  }

  getStudentById(studentId: string) {
    console.log('--studentId', studentId)
    const subscription = this.studentsService.getById(studentId)
      .subscribe((student: Student) => {
        console.log('--student', student)

        if (!student){
          return;
        }
        this.student = student;
      })
    this.subscriptions.push(subscription);
  }

  updateStudent(student: Student) {
    console.log('---student', student);

    this.studentsService.update(student)
      .subscribe((result) => {
        console.log('---result', result);

        if (result){
          this.router.navigate(['../../all'], { relativeTo: this.activatedRoute });
        }
      })
  }

  ngOnDestroy() {
    console.log('----ngOnDestroy');
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
