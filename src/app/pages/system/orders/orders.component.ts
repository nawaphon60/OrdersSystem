import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  date = null;
  model_search = {
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


    this.post()
  }

  onChange(result: Date[]): void {
    // console.log('onChange: ', result);
    // console.log(this.model_search.startdate)
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
  
    window.open("https://uat.ketshoptest.com/system/e-commerce/order/edit/2012000100","_blank","width=1000,height=500,top=100");

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
