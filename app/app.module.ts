import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EmployeeListComponent} from './employee.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import {EmployeeOverviewComponent} from './employee-overview.component';
import {EmployeeProjectsComponent} from './employee-projects.component';
import { EmployeeService } from './services/employee.service';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {LoginService} from './services/login.service';
import {CheckLoginGuard} from './guards/check-login.guard';
import {CheckSaveFormGuard} from './guards/check-save-form.guard';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes';
//Service có thể được import ở đây để dùng chung cho toàn module
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [AppComponent,
                EmployeeListComponent, 
                HomeComponent,
                EmployeeDetailComponent,
                EmployeeOverviewComponent,
                EmployeeProjectsComponent,
                LoginComponent
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}