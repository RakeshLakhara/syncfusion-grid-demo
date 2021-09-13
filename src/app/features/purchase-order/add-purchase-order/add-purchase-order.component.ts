import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {
  customerID ='';
  employeeID = 0;
  shipName   ='';
  shipCity  ='';
  shipAddress ='';
  constructor(
    private PurchaseOrderService:PurchaseOrderService,
    private router:Router
  ) { }

  ngOnInit(): void {}

  addPurchaseOrder():void{
    const data = {
      customerID : this.customerID,
      employeeID : this.employeeID ,
      shipName :this.shipName,
      shipCity :  this.shipCity  ,
      shipAddress :  this.shipAddress
    }
    this.PurchaseOrderService.add(data).subscribe(
      ()=>
      this.router.navigate(['/purchaseorder'])
    )
  }

}
