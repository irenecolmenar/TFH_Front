import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClientModule } from '@angular/common/http';


import { TableHttpExampleComponent } from './table-http-example/table-http-example.component';
import { TableRestComponent } from './table-rest/table-rest.component';
import { TableListComponent } from './table-list/table-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewTaskDialogComponent } from './tasks/new-task-dialog/new-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TableHttpExampleComponent,
    TableRestComponent,
    TableListComponent,
    TasksComponent,
    NewTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
