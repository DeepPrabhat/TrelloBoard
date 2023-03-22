import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.scss']
})
export class AddListDialogComponent {

  constructor(private dialogRefList: MatDialogRef<AddListDialogComponent>,private data:ApiService) {}

  addListForm = new FormGroup({
    listName: new FormControl('',Validators.required),
    //listDescription: new FormControl('',Validators.required)
  });


  onSubmitList(){
    // this.data.next(this.addTaskForm.value)
    console.log(this.addListForm.value.listName)
    //type problem
    this.data.addListStream(this.addListForm.value.listName);
  }

}
