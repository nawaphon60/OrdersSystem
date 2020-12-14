import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  status: number = 0
  trackcode: string = ""
  orderDetail: any = null
  selectdelivery: any = null
  Note: string = ""

  constructor(
    private orderService:OrderService,
    private activatedRoute: ActivatedRoute
  ) { }

  panels = [
    {
      active: true,
      disabled: false,
      name: 'Detail',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'font-weight':'500',
        border: '0px'
      }
    }
  ];

  async ngOnInit() {
    let ordercode = this.activatedRoute.snapshot.paramMap.get('ordercode')
      console.log('ordercode', ordercode)

    // this.orderService.getOrderByCode(ordercode).then((res:any)=>{
      
    //   console.log('order', res)
    //   this.orderDetail = res
    //   this.status = this.orderDetail.status
    //   this.Note = this.orderDetail.note

    //   // for(let obj of this.orderDetail.available_status){
    //   //   console.log(obj)
    //   // }
  

    // }).catch((err:any)=>{

      
    // })

    try{
      let res = await this.orderService.getOrderByCode(ordercode)

      console.log('order', res)
      this.orderDetail = res
      this.status = this.orderDetail.status
      this.Note = this.orderDetail.note
    }catch(err){
      
    }


    // for(let obj of this.orderDetail.available_status){
    //   console.log(obj)
    // }



  }


  onAction(action:string){
    console.log(action)
  }

  onStatusChange(){
    console.log(this.status)
  }


  onSave(){
    console.log(this.status)
    if(!this.trackcode.trim()){
      return
    }
    console.log(this.trackcode)
  }

  ondeliverychange() {
    console.log(this.selectdelivery)
  }
}
