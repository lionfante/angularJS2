import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: any[] = ['1', '2', '3', '4', '5'];
    private currentPage: number;
    constructor(private _employeeService: EmployeeService,
        private _router: Router,
        private _activatedRouter: ActivatedRoute) {

    }
    ngOnInit() {
        this._activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['page'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        })
        this._employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log(error);
        });
    }

}