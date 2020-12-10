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


  test(){
    let _header = {
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access_token}`
      }
    }
    return this._http.get(`${api_url}/util/websiteUsage`, _header).toPromise()
  }

  login(data:any) {
    return this._http.post(`${api_url}/login/web`,{
      domain: 'uat.ketshoptest.com',
      username: data.username,
      password: data.password
    }).toPromise()
  }

  post(data:any) {
    let _header = {
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access_token}`
      }
    }
    return this._http.post(`${api_url}/order/search`,data,_header).toPromise()
  }

}
