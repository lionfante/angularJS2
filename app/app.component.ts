import { Component,ViewChild } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public title = 'TEDU Online';

  onSubmit(value:any){
    console.log(value);
  }
 }