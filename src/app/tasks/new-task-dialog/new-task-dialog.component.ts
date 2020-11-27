import { HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
  taskPoint: number;
}

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.less']
})
export class NewTaskDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick() {
      this.dialogRef.close();
    }

    createTask() {
      return { name: this.data.name, description: this.data.description, taskPoint: this.data.taskPoint }
    }
}