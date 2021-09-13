import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AddPurchaseOrderComponent } from './features/purchase-order/add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './features/purchase-order/edit-purchase-order/edit-purchase-order.component';
import { PurchaseOrderComponent } from './features/purchase-order/purchase-order.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component:  LayoutComponent,
    children:[
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'purchaseorder', component: PurchaseOrderComponent,
      },
      {
        path: 'purchaseorder/add', component:AddPurchaseOrderComponent
      },
      {
        path: 'purchaseorder/:id/edit', component:EditPurchaseOrderComponent
      }
    ]
  },
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
