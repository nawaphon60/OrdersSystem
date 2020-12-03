import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
  { 
    path: '', component: SystemComponent, 
    children: [
      { path: '', redirectTo: 'orders', pathMatch: "full" },
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
