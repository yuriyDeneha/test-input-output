import { InputOutputTestModule } from './input-output-test/input-output-test.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'input-output-test',
    loadChildren: () => import('./input-output-test/input-output-test.module').then((mod) => mod.InputOutputTestModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then((mod) => mod.StudentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
