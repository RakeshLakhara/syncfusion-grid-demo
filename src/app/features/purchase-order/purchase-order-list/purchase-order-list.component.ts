import { Component, OnInit } from '@angular/core';
import { FilterService, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { PurchaseOrder } from 'src/app/interfaces/purchase-order';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css'],
  providers:[
    PageService,
    SortService,
    FilterService,
  ]
})
export class PurchaseOrderListComponent implements OnInit {

  
  public filter: Object;
  public pageSettings: PageSettingsModel;
  public filterSettings: Object;
    public idrules: Object;
    public customeridrules: Object;
   


  public purchaseOrders: PurchaseOrder[] = []
  constructor(private PurchaseOrderService:PurchaseOrderService) { }


  ngOnInit(): void {
    this.PurchaseOrderService.getAll().subscribe(
      purchaseOrders => {
        this.purchaseOrders  = purchaseOrders
      }
    )

    this.filterSettings = { type: "Menu" };
    this.filter = { type: "CheckBox" };    
    this.idrules = { required: true };
    this.customeridrules = { required: true };
   
    this.pageSettings = { pageSizes: true, pageSize: 5 };
  }

  delete(id:number):void{
    this.PurchaseOrderService.delete(id).subscribe(
      ()=>{
        this.purchaseOrders = this.purchaseOrders.filter(p => p.id !== id);
      }
    )
  }
}
