import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail/:id', component: EmployeeDetailComponent }
]
export const appRoutes = RouterModule.forRoot(routing);