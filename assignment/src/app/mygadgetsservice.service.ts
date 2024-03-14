import { Injectable } from '@angular/core';
import { gadgets } from './gadgets/gadgets';
import { MyGadgets } from './Mygadgets';
import { Observable,of } from 'rxjs';
import { MessageserviceService } from './messageservice.service';
import { gadgetsdetails } from './gadgetsdetails/gadgetdetail';
import { Mygadgetdetail } from './My-gadgetdetail';

@Injectable({
  providedIn: 'root'
})
export class MygadgetsserviceService {

  constructor(private messageservice:MessageserviceService) { }
  
  getgadget():Observable<gadgets[]>{
    this.messageservice.add('Gadgets are displayed....');
    return of(MyGadgets);
  }
  getgadgetdetail(id:number):Observable<gadgetsdetails>{
    const gadget=Mygadgetdetail.find(ch=>ch.id===id)!;
    this.messageservice.add(`Gadget displayed is ${id}`);
    return of(gadget);
  }
}
