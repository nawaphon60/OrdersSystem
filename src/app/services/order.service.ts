import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_url = 'https://api.ketshoptest.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private _http:HttpClient
  ) { }

post(data:any) {
  let  token = localStorage.getItem('token')
  let token_json = JSON.parse(token)

  let _header = {
    headers: {
      authorization: `Bearer ${token_json.access_token}`
    }
  }
  return this._http.post(`${api_url}/order/search`,data,_header).toPromise()
}

getOrderByCode(ordercode: string){

  let  token = localStorage.getItem('token')
  let token_json = JSON.parse(token)

  let _header = {
    headers: {
      authorization: `Bearer ${token_json.access_token}`
    }
  }
    
  return this._http.get(`${api_url}/order/${ordercode}?type=ordercode`,_header).toPromise()
}

update(data: any, ordercode: string){

  let token = localStorage.getItem('token')
  let token_json = JSON.parse(token)

  let _header = {
    headers: {
      authorization: `Bearer ${token_json.access_token}`
    }
  }
    
  return this._http.put(`${api_url}/order/${ordercode}`, data, _header).toPromise()
}



}
