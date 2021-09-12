import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderComponent } from './purchase-order.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';



@NgModule({
  declarations: [
    PurchaseOrderComponent,
    PurchaseOrderListComponent,
    AddPurchaseOrderComponent,
    EditPurchaseOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PurchaseOrderModule { }
