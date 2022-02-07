import { Student } from './../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.scss']
})
export class StudentsCreateComponent implements OnInit {

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createStudent(student: Student) {
    this.studentsService.create(student)
      .subscribe((result) => {
        console.log('---result', result);

        if (result){
          this.router.navigate(['../all'], { relativeTo: this.activatedRoute });
        }
      })
  }

}
