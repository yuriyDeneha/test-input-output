import { StudentsService } from './services/students.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { IndexComponent } from './components/index/index.component';
import { StudentsAllComponent } from './components/students-all/students-all.component';
import { StudentsCreateComponent } from './components/students-create/students-create.component';
import { StudentsUpdateComponent } from './components/students-update/students-update.component';
import { StudentsReadComponent } from './components/students-read/students-read.component';
import { StudentsDeleteComponent } from './components/students-delete/students-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { SharedModule } from '../shared/shared.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [IndexComponent, StudentsAllComponent, StudentsCreateComponent, StudentsUpdateComponent, StudentsReadComponent, StudentsDeleteComponent, StudentFormComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe,
    StudentsService
  ]
})
export class StudentsModule { }
