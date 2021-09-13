import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-edit-purchase-order',
  templateUrl: './edit-purchase-order.component.html',
  styleUrls: ['./edit-purchase-order.component.css']
})
export class EditPurchaseOrderComponent implements OnInit {

  form: FormGroup;
  id:number;
  
  constructor(
    private formBuilder:FormBuilder,
    private PurchaseOrderService:PurchaseOrderService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.form = this.formBuilder.group({
     customerID : '', 
     employeeID : '',
     shipName :   '',
     shipCity :   '',
     shipAddress  :'' 
    })
    this.id = this.route.snapshot.params.id;
    this.PurchaseOrderService.get(this.id).subscribe(
      purchaseOrder => this.form.patchValue(purchaseOrder)
    )
  }

  ngOnInit(): void {
  }

  submit():void{
    this.PurchaseOrderService.update(this.id,this.form.getRawValue()).subscribe(
      ()=>{
        this.router.navigate(['/purchaseorder'])
      }
    )
  }
}
