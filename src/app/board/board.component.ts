import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../api.service';
import { Lists } from '../models/Lists';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { AddListDialogComponent } from '../add-list-dialog/add-list-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit{

  constructor(private apiSerice:ApiService,private dialog: MatDialog){  }


  openDialogTask(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTaskDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogList(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddListDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  abc:Lists[]=[];
  num:number=0;
  noOfList:number[]=[];



  ngOnInit():void{
    console.log("ngOnInit is called");
    this.abc.push(this.apiSerice.list1);
    this.abc.push(this.apiSerice.list2);
    this.abc.push(this.apiSerice.list3);
    this.abc.push(this.apiSerice.list4);
    console.log(this.abc);
  }

  ngOnChanges():void{
    console.log("ngOnChanges is called")
  }

  addLists():void{
    this.num=this.num+1;
    console.log(this.num)
    this.noOfList=[...Array(this.num).keys()]
  }


  dropTasks(event: CdkDragDrop<string[]>): void {
    console.log("TaskChange-->");
    console.log(event);
    if(event.container.id=="cdk-drop-list-1")
    {
      this.abc[0].listTasks=event.container.data;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  dropLists(event: CdkDragDrop<Lists[]>): void {
    console.log("ListChange-->");
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}

