import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EmployeeListComponent} from './employee.component'
//Service có thể được import ở đây để dùng chung cho toàn module
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,EmployeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}