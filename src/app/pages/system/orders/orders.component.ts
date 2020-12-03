import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  date = null;
  OrderData = {
    channel: "",
    ordercode: "",
    order_date: "",
    name: "",
    lastname: "",
    username: "",
    totals: "",
    startdate: "",
    delivery: "",
    trackcode: "",
    created_at: "",
    created_by: ""
  }
  Itemcount: any = ""

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    console.log(`I will init when tab active`);
    this.post()
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  post() {
    let model = {
      channel: this.OrderData.channel,
      ordercode: this.OrderData.ordercode,
      order_date: this.OrderData.order_date,
      name: this.OrderData.name,
      lastname: this.OrderData.lastname,
      username: this.OrderData.username,
      totals: this.OrderData.totals,
      startdate: this.OrderData.startdate,
      delivery: this.OrderData.delivery,
      trackcode: this.OrderData.trackcode,
      created_at: this.OrderData.created_at,
      created_by: this.OrderData.created_by
    }

    this.loginService.post(model).then((res: any) => {

      this.OrderData = res.data;
      this.Itemcount = res.count;
      console.log(this.Itemcount)

    })
      .catch((err: any) => {

      })
  }

  onPageIndexChange($event) {
    //do something here to go to next page
  }

  replaceLineBreaksWithHTML(string) {
    return string !== undefined ? string.replace(/\n/g, '<br/>') : "";
  }

  replaceHTMLWithLineBreaks(string) {
    return string !== undefined ? string.replace(/<br\/>/gi, '\n') : "";
  }

}
