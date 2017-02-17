import { Component,ViewChild } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  public title = 'TEDU Online';
  public cities = [
    {Id:'1',Name:'HCM'},
    {Id:'2',Name:'Hà Nội'},
    {Id:'3',Name:'Huế'}
  ]

  onSubmit(value:any){
    console.log(value);
  }
 }