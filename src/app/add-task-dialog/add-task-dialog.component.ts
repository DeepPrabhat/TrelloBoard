import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent {

  constructor(private dialogRefTask: MatDialogRef<AddTaskDialogComponent>,private data:ApiService) {}

  addTaskForm = new FormGroup({
    taskName: new FormControl('',Validators.required),
    taskDescription: new FormControl('',Validators.required)
  });


  onSubmitTask(){
    // this.data.next(this.addTaskForm.value)
    console.log(this.addTaskForm.value.taskName)
    //type problem
    this.data.addTaskStream(this.addTaskForm.value.taskName);
  }

}
