import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = 'http://58a6ae1be949201200f14616.mockapi.io/api/employees/';
    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
    GetSingle(id: number): Observable<any> {
        return this._http.get(this.apiUrl + id).map((response: Response) => response.json())
    }
    Update(id: number, data: any): Observable<any[]> {
        return this._http.put(this.apiUrl + id, data).map((response: Response) => response.json())
    }
    Add(data: any): Observable<any[]> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json())
    }
}