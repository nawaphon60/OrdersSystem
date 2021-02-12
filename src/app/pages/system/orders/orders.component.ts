import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { OrderService } from 'src/app/services/order.service';
import * as moment from 'moment'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  date: any[] = null;
  model_search = {
    id: "",
    search: "",
    status: "",
    page: 3,
    perpage: 10,
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
  listorder: any[] = []

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    console.log(this.model_search.status)

    this.model_search.startdate = moment(moment().add(-2, 'months').format('YYYY-MM-DD HH:MM:ss')).format('YYYY-MM-DD 00:00:00')
    this.model_search.enddate = moment().format('YYYY-MM-DD 23:59:59')
    this.date = [this.model_search.startdate, this.model_search.enddate]
    this.post()
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
    // console.log(this.model_search.startdate)
    if (result.length == 2) {
      this.model_search.startdate = moment(result[0]).format('YYYY-MM-DD HH:MM:ss')
      this.model_search.enddate = moment(result[1]).format('YYYY-MM-DD HH:MM:ss')
    } else {
      this.model_search.startdate = ""
      this.model_search.enddate = ""
    }
    this.post()
  }

  post() {
    this.orderService.post(this.model_search).then((res: any) => {

      this.listorder = res.data;
      this.Itemcount = res.count;

      console.log(res)
    })
      .catch((err: any) => {

      })
  }

  onPageIndexChange($event) {
    //do something here to go to next page
    this.model_search.page = $event
    this.post()
  }

  openorder(ordercode: any) {
    window.open(`/order-detail/${ordercode}`, "_blank", "width=475,height=700");
  }

  Selected($event) {
    this.orderService.post(this.model_search).then((res: any) => {
      this.listorder = res.data;
      this.Itemcount = res.count;
      console.log(res)
    })
      .catch((err: any) => {

      })
  }


}
