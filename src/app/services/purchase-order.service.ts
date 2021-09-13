import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../interfaces/purchase-order';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  apiUrl = 'http://localhost:3000/PurchaseOrders'
  constructor(private http: HttpClient) { }

  getAll():Observable<PurchaseOrder[]>{
    return this.http.get<PurchaseOrder[]>(this.apiUrl)
  }

  add(data:any):Observable<PurchaseOrder>{
    return this.http.post<PurchaseOrder>(this.apiUrl,data)
  }

  get(id:Number):Observable<PurchaseOrder>{
    return this.http.get<PurchaseOrder>(`${this.apiUrl}/${id}`)
  }

  update(id: number,data:any):Observable<PurchaseOrder>{
    return this.http.put<PurchaseOrder>(`${this.apiUrl}/${id}`,data)
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
