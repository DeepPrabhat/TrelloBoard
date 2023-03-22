import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../api.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { Tasks } from '../models/Tasks';
import { Lists } from '../models/Lists';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit{

  constructor(private apiSerice:ApiService){  }


  abc:Lists[]=[];

  num:number=0;
  noOfList:number[]=[];

  task1:Tasks={taskName:"todo"}
  task2:Tasks={taskName:"done"}

  list1:Lists={listName:"help",listTasks:[
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ]}

  list2:Lists={listName:"done",listTasks:[
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ]}

  list3:Lists={listName:"fuckyou",listTasks:[
    'Get up',
    'gand mara',
    'Take a shower',
    'valo khel',
    'asdasf'
  ]}

  list4:Lists={listName:"fuckyou",listTasks:[
    'Get up',
    'gand mara',
    'Take a shower',
    'valo khel',
    'asdasf'
  ]}

  ngOnInit():void{
    console.log("ngOnInit is called");
    this.abc.push(this.list1);
    this.abc.push(this.list2);
    this.abc.push(this.list3);
    this.abc.push(this.list4);
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
