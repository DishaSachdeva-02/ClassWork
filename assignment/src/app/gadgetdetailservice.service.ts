import { Injectable } from '@angular/core';
import { gadgetsdetails } from './gadgetsdetails/gadgetdetail';
import { Mygadgetdetail } from './My-gadgetdetail';
import { Observable,of } from 'rxjs';
import { MessageserviceService } from './messageservice.service';
@Injectable({
  providedIn: 'root'
})
export class GadgetdetailserviceService {

 
  constructor(private messageservice:MessageserviceService) { }
  getgadgetdetail(id:number):Observable<gadgetsdetails>{
    const gadget=Mygadgetdetail.find(ch=>ch.id===id)!;
    this.messageservice.add(`Gadget displayed is ${id}`);
    return of(gadget);
  }
}
