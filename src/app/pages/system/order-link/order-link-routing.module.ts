import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderLinkComponent } from './order-link.component';

const routes: Routes = [{ path: '', component: OrderLinkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderLinkRoutingModule { }
