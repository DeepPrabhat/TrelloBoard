import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AddTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
