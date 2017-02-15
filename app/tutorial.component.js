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
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.applyClass = true;
        this.blueColor = true;
        this.voted = false;
        this.onVote = new core_1.EventEmitter();
    }
    TutorialComponent.prototype.OnClick = function (name) {
        console.log(name);
    };
    TutorialComponent.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit(agree);
    };
    TutorialComponent.prototype.setName = function (name) {
        this.name = name;
    };
    return TutorialComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TutorialComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TutorialComponent.prototype, "onVote", void 0);
TutorialComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorial',
        template: "\n  <!--<h2 [class.redColor]=\"applyClass\">This is my tutorial</h2>\n  <h3 [style.color]=\"blueColor?'blue':'black'\">Apply Style</h3>\n  <button (click)=\"OnClick(name.value)\">Click</button>\n  <input type=\"text\" #name value=\"abc\" />\n  <input type=\"text\" [(ngModel)] = \"fname\" />\n  <input type=\"text\" [(ngModel)] = \"lname\" />\n  <br/>\n  Full name: {{fname}} {{lname}}\n  <br/>-->\n  <p>Child component: {{name}}</p>\n  <button [disabled] = \"voted\" (click) = \"vote(true)\">Agree</button>\n  <button [disabled] = \"voted\" (click) = \"vote(false)\">Disgree</button>",
        styles: [".redColor{\n    color: red;\n  }"]
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map