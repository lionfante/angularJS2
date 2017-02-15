import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'my-tutorial',
  template: `
  <!--<h2 [class.redColor]="applyClass">This is my tutorial</h2>
  <h3 [style.color]="blueColor?'blue':'black'">Apply Style</h3>
  <button (click)="OnClick(name.value)">Click</button>
  <input type="text" #name value="abc" />
  <input type="text" [(ngModel)] = "fname" />
  <input type="text" [(ngModel)] = "lname" />
  <br/>
  Full name: {{fname}} {{lname}}
  <br/>-->
  <p>Child component: {{name}}</p>
  <button [disabled] = "voted" (click) = "vote(true)">Agree</button>
  <button [disabled] = "voted" (click) = "vote(false)">Disgree</button>`,
  styles: [`.redColor{
    color: red;
  }`]
})
export class TutorialComponent {
  public applyClass = true;
  public blueColor = true;
  public voted:boolean = false;

  @Input() name:string;
  @Output() onVote = new EventEmitter<boolean>();

  OnClick(name){
    console.log(name);
  }
  vote(agree:boolean){
    this.voted = true;
    this.onVote.emit(agree);
  }
  setName(name:string){
    this.name = name;
  }
 }