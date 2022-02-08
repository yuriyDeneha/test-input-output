import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ConfirmModalComponent,
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
