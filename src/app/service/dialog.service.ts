import {Component, Injectable} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})

export class DialogService {
  constructor(public dialogRef: MatDialogRef<Component>) {
  }

  closePopup(): void {
    this.dialogRef.close('Pizza');
  }

}
