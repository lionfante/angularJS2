import {Component,OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'employee-overview-component',
    template: `
        <h1>This is employee-overview component</h1>
    `
})
export class EmployeeOverviewComponent implements OnInit,OnDestroy{
    public parentRouterId: number;
    public sub: Subscription;
    constructor(private router:Router,private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params=>{
            this.parentRouterId = params['id'];
            alert(this.parentRouterId);
        })
    }
    ngOnDestroy(){

    }

}