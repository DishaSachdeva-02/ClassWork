import { Injectable } from '@angular/core';
import { gadgetsdetails } from './gadgetsdetails/gadgetdetail';
import { Mygadgetdetail } from './My-gadgetdetail';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GadgetdetailserviceService {

 
  constructor() { }
  getgadgetdetail(id:number):Observable<gadgetsdetails>{
    const gadget=Mygadgetdetail.find(ch=>ch.id===id)!;
    return of(gadget);
  }
}
