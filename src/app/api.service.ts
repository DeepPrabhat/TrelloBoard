import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Lists } from './models/Lists';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  list1:Lists={listName:"",listTasks:[
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


  addTaskStream(taskName:any)
  {
    this.list1.listTasks.push(taskName);
  }
  addListStream(listName:any)
  {
    this.list1.listName=listName;
  }
}
