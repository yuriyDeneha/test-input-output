import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-all',
  templateUrl: './students-all.component.html',
  styleUrls: ['./students-all.component.scss']
})
export class StudentsAllComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {

    this.getStudents();
  }

  getStudents() {
    this.studentsService.getAll()
      .subscribe((students: Student[]) => {
        this.students = students;
      })
  }

  deleteStudent(studentId: string) {
    this.studentsService.delete(studentId).subscribe((result) => {
      console.log('Delte student status: ', result);
      this.getStudents();
    });
  }

}