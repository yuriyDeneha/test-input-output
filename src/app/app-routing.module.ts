import { InputOutputTestModule } from './input-output-test/input-output-test.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input-output-test',
    pathMatch: 'full'
  },
  {
    path: 'input-output-test',
    loadChildren: () => import('./input-output-test/input-output-test.module').then((mod) => mod.InputOutputTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
