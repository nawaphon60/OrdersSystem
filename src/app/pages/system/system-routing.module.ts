import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  { 
    path: '', component: SystemComponent, 
    children: [
      { path: '', redirectTo: 'orders', pathMatch: "full" },
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
      { path: 'order-link', loadChildren: () => import('./order-link/order-link.module').then(m => m.OrderLinkModule) },
      { path: 'products', loadChildren: () => import('.//products/products.module').then(m => m.ProductsModule) }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
