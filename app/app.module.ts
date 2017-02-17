import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EmployeeListComponent} from './employee.component';
import {HttpModule} from '@angular/http';
//Service có thể được import ở đây để dùng chung cho toàn module
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent,EmployeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}