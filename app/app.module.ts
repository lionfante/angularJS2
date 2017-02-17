import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EmployeeListComponent} from './employee.component';
import {HomeComponent} from './home.component';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes';
//Service có thể được import ở đây để dùng chung cho toàn module
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [AppComponent,EmployeeListComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}