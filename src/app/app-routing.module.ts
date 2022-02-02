import { InputOutputTestModule } from './input-output-test/input-output-test.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './component/repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repositories',
    pathMatch: 'full'
  },
  {
    path: 'repositories',
    component: RepositoriesComponent
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
