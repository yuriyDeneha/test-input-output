import { IndexComponent } from './components/index/index.component';
import { StudentsUpdateComponent } from './components/students-update/students-update.component';
import { StudentsReadComponent } from './components/students-read/students-read.component';
import { StudentsCreateComponent } from './components/students-create/students-create.component';
import { StudentsAllComponent } from './components/students-all/students-all.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsDeleteComponent } from './components/students-delete/students-delete.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
        {
          path: 'all', // read all / get all
          component: StudentsAllComponent,
        },
        {
          path: 'create', // create student
          component: StudentsCreateComponent,
        },
        {
          path: ':student_id', // create student
          children: [
            {
              path: 'read', // read student
              component: StudentsReadComponent,
            },
            {
              path: 'update', // update student
              component: StudentsUpdateComponent,
            },
            {
              path: 'delete', // delete student
              component: StudentsDeleteComponent,
            },
          ]
        },
        {
          path: '',
          redirectTo: 'all',
          pathMatch: 'full'
        },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
