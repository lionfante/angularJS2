import { Component,ViewChild, OnInit } from '@angular/core';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  constructor(private router:Router,private _loginService:LoginService){

  }
  public title = 'TEDU Online';
  public cities = [
    {Id:'1',Name:'HCM'},
    {Id:'2',Name:'Hà Nội'},
    {Id:'3',Name:'Huế'}
  ]

  onSubmit(value:any){
    console.log(value);
  }
  // ngOnInit(){
  //   this._isLoggedIn = this._loginService.IsLogin();
  // }

  Logout(){
    this._loginService.SetLogin(false);
    this.router.navigate(['/']);
  }
 }