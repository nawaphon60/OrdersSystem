import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { LoginService } from 'src/app/services/login.service';
import * as moment from 'moment'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  date: any[] = null;
  model_search = {
    search : "",
    status: "",
    page : 1,
    perpage :10,
    channel: "",
    ordercode: "",
    order_date: "",
    name: "",
    lastname: "",
    username: "",
    totals: "",
    startdate: "",
    enddate: "",
    delivery: "",
    trackcode: "",
    created_at: "",
    created_by: "",
    paymenttype: ""
  }
  Itemcount: any = ""
  listorder: any [] = []

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    console.log(this.model_search.status)

    this.model_search.startdate = moment(moment().add(-2, 'months').format('YYYY-MM-DD HH:MM:ss')).format('YYYY-MM-DD 00:00:00')
    this.model_search.enddate =  moment().format('YYYY-MM-DD 23:59:59')
    this.date = [this.model_search.startdate, this.model_search.enddate]
    this.post()
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
    // console.log(this.model_search.startdate)
    if(result.length == 2){
      this.model_search.startdate = moment(result[0]).format('YYYY-MM-DD HH:MM:ss')
      this.model_search.enddate =  moment(result[1]).format('YYYY-MM-DD HH:MM:ss')
    }else{
      this.model_search.startdate = ""
      this.model_search.enddate = ""
    }
    this.post()
  }

  post() {
    this.loginService.post(this.model_search).then((res: any) => {

      this.listorder = res.data;
      this.Itemcount = res.count;
      console.log(this.Itemcount)
      console.log(this.listorder)
    })
      .catch((err: any) => {

      })
  }

  onPageIndexChange($event) {
    //do something here to go to next page
    // console.log($event)
    this.model_search.page = $event
    this.post()
  }

  // replaceLineBreaksWithHTML(string) {
  //   return string !== undefined ? string.replace(/\n/g, '<br/>') : "";
  // }

  // replaceHTMLWithLineBreaks(string) {
  //   return string !== undefined ? string.replace(/<br\/>/gi, '\n') : "";
  // }


  edit(){
    // window.open("https://uat.ketshoptest.com/system/e-commerce/order/edit/2012000092", "_blank", "toolbar=no, location=no,menubar=no,top=1000");
  
    window.open("/system/e-commerce/order/edit/2012000100","_blank","width=1000,height=500,top=100");

  }

  Selected($event){
    this.loginService.post(this.model_search).then((res: any) => {

      
      this.listorder = res.data;
      this.Itemcount = res.count;
      console.log(this.Itemcount)
      console.log(this.model_search.status)
    })
    .catch((err: any) => {

    })
  }
  

}
