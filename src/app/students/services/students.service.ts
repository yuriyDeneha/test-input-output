import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [];

  constructor() {
    this.init();
  }


  public init() {
    const student1 = new Student({ id: '1', name: 'Natalia'});
    const student2 = new Student({ id: '2', name: 'Andrii'});
    const student3 = new Student({ id: '3', name: 'Grisha'});

    this.create(student1).subscribe();
    this.create(student2).subscribe();
    this.create(student3).subscribe();
  }

  public getAll(): Observable<Student[]> {
    return of(this.students);
  }

  public getById(studentId: string): Observable<Student> {
    if (!studentId || !this.students.length) {
      return undefined;
    }
    console.log(this.students);
    const selectedStudent = this.students.find((student: Student) => student.id === studentId);
    console.log(selectedStudent);
    return of(selectedStudent);
  }

  public create(student: Student): Observable<Student> {
    if (!student){
      return undefined;
    }
    this.students.push(student);
    return of(student);
  }

  public update(student: Student): Observable<Student> {
    if (!student || !student.id){
      return undefined;
    }

    const selectedStudentIndex = this.students.findIndex((s: Student) => s.id === student.id);
    this.students[selectedStudentIndex] = student;

    return of(student);
  }

  public delete(studentId: string): Observable<boolean> {
    if (!studentId){
      return of(false);
    }

    this.students = this.students.filter((s: Student) => s.id !== studentId);
    return of(true);
  }
}
