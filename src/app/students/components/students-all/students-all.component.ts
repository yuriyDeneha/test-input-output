import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students-all',
  templateUrl: './students-all.component.html',
  styleUrls: ['./students-all.component.scss']
})
export class StudentsAllComponent implements OnInit {

  students: Student[];

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getStudents();
  }

  getStudents() {
    this.studentsService.getAll()
      .subscribe((students: Student[]) => {
        this.students = students;
      })
  }

  deleteStudent(student: Student) {

    console.log(student)
    const confirmModalRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        elementName: student.name
      }
    });

    confirmModalRef.afterClosed().subscribe((result: boolean | string) => {
      console.log('RESULT - ', result);
      if (result){
        this.studentsService.delete(student.id).subscribe((result) => {
          console.log('Delte student status: ', result);
          this.getStudents();
          this.snack.open('Delete action is successful!');
        });
      } else {
        this.snack.open('Delete action is cancelled!');
      }
    })

  }

  redirectToCreateForm() {
    this.router.navigate(['../create'], { relativeTo: this.activetedRoute });
  }

}
