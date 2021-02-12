import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderLinkRoutingModule } from './order-link-routing.module';
import { OrderLinkComponent } from './order-link.component';


@NgModule({
  declarations: [OrderLinkComponent],
  imports: [
    CommonModule,
    OrderLinkRoutingModule
  ]
})
export class OrderLinkModule { }
