import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    public _isLogin:boolean;
    IsLogin():boolean{
        return this._isLogin;
    }
    SetLogin(isLogin:boolean){
        this._isLogin = isLogin;
    }
}