import { Component,ViewChild } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  public title = 'TEDU Online';

  onSubmit(value:any){
    console.log(value);
  }
 }