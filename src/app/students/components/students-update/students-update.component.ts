import { StudentsService } from './../../services/students.service';
import { Gender, Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.scss']
})
export class StudentsUpdateComponent implements OnInit {

  studentForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    aboutMe: ['', Validators.required],
    age: [0, Validators.required],
    favouriteColor: ['', Validators.required],
    birthday: [new Date(), Validators.required],
    gender: [Gender.PreferNotToSay, Validators.required],
  });

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
    this.studentsService.getById(studentId)
      .subscribe((student: Student) => {
        console.log('--student', student)

        if (!student){
          return;
        }

        this.updateForm(student);
      })
  }

  updateForm(student: Student) {
    this.studentForm.patchValue({
      ... student,
      birthday: this.datePipe.transform(student.birthday, 'yyyy-MM-dd')
    });
  }

  get Gender() {
    return Gender;
  }

  updateStudent() {
    const udpatedStudent = this.studentForm.value;
    console.log('---udpatedStudent', udpatedStudent);

    this.studentsService.update(udpatedStudent)
      .subscribe((result) => {
        console.log('---result', result);

        if (result){
          this.router.navigate(['../../all'], { relativeTo: this.activatedRoute });
        }
      })

  }

}
