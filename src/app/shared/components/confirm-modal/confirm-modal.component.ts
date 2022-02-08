import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<ConfirmModalComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmDelete(elementName: string) {
    this.matDialogRef.close(elementName);
  }
}
