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
    return this._http.post(`${api_url}/order/search`,{
      channel: data.channel,
      odercode: data.odercode,
      order_date: data.order_date,
      name: data.bill_name,
      lastname: data.bill_lastname,
      username: data.username,
      totals: data.totals,
      startdate: data.startdate,
      delivery: data.delivery,
      trackcode: data.trackcode,
      itemcount: data.count,
      created_at: data.created_at,
      created_by: data.created_by
    },_header).toPromise()
  }

}
