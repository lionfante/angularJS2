import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { EmployeeService } from './services/employee.service'
import {Subscription} from 'rxjs';

@Component({
    selector: 'employee-add-component',
    templateUrl: `./app/employee-add.component.html`
})
export class EmployeeAddComponent implements OnInit{
    public _id:number;
    public employee:any;
    constructor(private router: Router, 
            private activatedRoute:ActivatedRoute, 
            public employeeService: EmployeeService){

    }
    ngOnInit(){
        this.employee = {};
    }
    GoToEmployees(){
        this.router.navigate(['employees']);
    }
    Add(){
        console.log(this.employee);
        this.employeeService.Add(this.employee).subscribe(response=>{
            if(response){
                alert('add sucess');
                this.router.navigate(['employees']);
            }
        });
    }
}