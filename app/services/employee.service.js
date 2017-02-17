"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.GetList = function () {
        var employees = [
            { Id: '1', Name: 'Lê Văn A' },
            { Id: '2', Name: 'Lê Văn B' },
            { Id: '3', Name: 'Lê Văn C' },
            { Id: '4', Name: 'Lê Văn D' },
            { Id: '5', Name: 'Lê Văn E' }
        ];
        return employees;
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map