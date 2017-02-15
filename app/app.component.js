"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tutorial_component_1 = require("./tutorial.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TEDU Online';
        //property binding
        this.image = 'http://lorempixel.com/300/300';
        this.welcomeText = 'Welcome to angular js 2';
        this.agree = 0;
        this.disgree = 0;
        this.names = ['mr A', 'mr B', 'mr C', 'mr D'];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.agree++;
        else
            this.disgree++;
    };
    AppComponent.prototype.changeName = function () {
        this.tutorialComponent.setName('TEDU change name in parent');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(tutorial_component_1.TutorialComponent),
    __metadata("design:type", tutorial_component_1.TutorialComponent)
], AppComponent.prototype, "tutorialComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hell {{title}} Angular 2!</h1>\n  <img [src]=\"image\" />\n  <input type='text' [value]='welcomeText'/>\n  <input type='text' #textName (keyup)='0' />\n  <p>Agree Number: {{agree}} - Disgree Number: {{disgree}}</p>\n  <button (click)=\"changeName()\">Change Name</button>\n  <my-tutorial *ngFor=\"let person of names\" [name] = \"person\" (onVote)=\"parentVote($event)\"></my-tutorial>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map