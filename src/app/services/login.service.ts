import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_url = 'https://api.ketshoptest.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http:HttpClient
  ) { }


  login(data:any) {
    return this._http.post(`${api_url}/login/web`,{
      domain: 'uat.ketshoptest.com',
      username: data.username,
      password: data.password
    }).toPromise()
  }

}
