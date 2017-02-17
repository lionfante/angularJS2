import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: '1', Name: 'Lê Văn A' },
            { Id: '2', Name: 'Lê Văn B' },
            { Id: '3', Name: 'Lê Văn C' },
            { Id: '4', Name: 'Lê Văn D' },
            { Id: '5', Name: 'Lê Văn E' }
        ];
        return employees;
    }
}