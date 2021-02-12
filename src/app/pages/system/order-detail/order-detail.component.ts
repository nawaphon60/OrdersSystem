import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

interface ImodelSave {
  bill_name: string;
  bill_tel: string;
}

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  model: ImodelSave = {
    bill_name: "",
    bill_tel: ""
  }

  status: number = 0
  trackcode: string = ""
  orderDetail: any = null
  selectdelivery: any = null
  Note: string = ""

  constructor(
    private orderService:OrderService,
    private activatedRoute: ActivatedRoute
  ) {

  }

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
    let o = {
      gg: "d",
      ss: {
        dd: "e"
      }
    }

    let aa = [o,o,o]


    try{
      let res = await this.orderService.getOrderByCode(ordercode) as ImodelSave

      console.log('order', res)
      this.orderDetail = res

      // การ clone ทั้งหมด ต้อง install Lodash และ import มาใช้
      // this.model  =  cloneDeep(this.orderDetail) as  ImodelSave

      this.model.bill_name = this.orderDetail.bill_name
      this.model.bill_tel = this.orderDetail.bill_tel
      this.status = this.orderDetail.status
      this.Note = this.orderDetail.note
    }catch(err){
      
      
    }




    // for(let obj of this.orderDetail.available_status){
    //   console.log(obj)
    // }

    // this.sleep().then((r)=>{

    // }).catch((err)=>{

    // })
    // .finally(()=>{

    // })

  }

  // sleep(){
  //   return new Promise((s,j)=>{
  //     setTimeout(()=>{
  //       s(1)
  //     },2000)
  //   })
  // }

  onAction(action:string){
    console.log(action)
  }

  onStatusChange(){
    console.log(this.status)
  }


  update(ordercode: any){
    let model  = {
      bill_name: this.model.bill_name, 
      bill_tel: this.model.bill_tel
    }
    console.log(model)
    this.orderService.update(model, ordercode).then((res:any)=>{
    
    })
    .catch((err:any)=>{

    })
    
    console.log(this.status)
    this.closeWindow()
    // if(!this.trackcode.trim()){
      
    // }
    // console.log(this.trackcode)
  }

  closeWindow() {
    window.self.close()
  }

  ondeliverychange() {
    console.log(this.selectdelivery)
  }
}
