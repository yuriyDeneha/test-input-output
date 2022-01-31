import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputTestRoutingModule } from './input-output-test-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ToDoubleValuePipe } from './pipes/to-double-value.pipe';

const exportsComponents = [
  ParentComponent,
  ChildComponent
]

@NgModule({
  declarations: [
    ... exportsComponents,
    ToDoubleValuePipe
  ],
  imports: [
    CommonModule,
    InputOutputTestRoutingModule
  ]
})
export class InputOutputTestModule { }
