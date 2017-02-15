import { Component,ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell {{title}} Angular 2!</h1>
  <img [src]="image" />
  <input type='text' [value]='welcomeText'/>
  <input type='text' #textName (keyup)='0' />
  <p>Agree Number: {{agree}} - Disgree Number: {{disgree}}</p>
  <button (click)="changeName()">Change Name</button>
  <my-tutorial *ngFor="let person of names" [name] = "person" (onVote)="parentVote($event)"></my-tutorial>`
})
export class AppComponent {
  public title = 'TEDU Online';

  //property binding
  public image = 'http://lorempixel.com/300/300';
  public welcomeText = 'Welcome to angular js 2';

  public agree:number = 0;
  public disgree:number = 0;

  public names = ['mr A', 'mr B', 'mr C', 'mr D'];

  @ViewChild(TutorialComponent)
  private tutorialComponent:TutorialComponent;

  parentVote(agree:boolean){
    if(agree) this.agree++;
    else this.disgree++;
  }
  changeName(){
    this.tutorialComponent.setName('TEDU change name in parent');
  }
 }