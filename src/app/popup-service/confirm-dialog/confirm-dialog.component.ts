import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface ConfirmData {
  idOfItem: number;
  headerTitle: string;
  hintText: string;
  itemName: string;
  cancelLabel: string;
  confirmLabel: string;
}

@Component({
  selector: 'app-confirm-dialog-component',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  headerTitle = '';
  idOfItem = 0;
  hintText = 'DELETE_HINT_TEXT';
  itemName = 'itemName';
  cancelLabel = 'CONFIRM_DELETE.CANCEL';
  confirmLabel = 'CONFIRM_DELETE.CONFIRM';

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) confirmData: ConfirmData,) {
    this.hintText = confirmData.hintText;
    this.itemName = confirmData.itemName;
    this.headerTitle = confirmData.headerTitle;
    this.confirmLabel = confirmData.confirmLabel;
    this.cancelLabel = confirmData.cancelLabel;
    this.idOfItem = confirmData.idOfItem;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
