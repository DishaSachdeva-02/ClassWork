import { Injectable } from '@angular/core';
import { gadgets } from './gadgets/gadgets';
import { MyGadgets } from './Mygadgets';
import { Observable,of } from 'rxjs';
import { MessageserviceService } from './messageservice.service';

@Injectable({
  providedIn: 'root'
})
export class MygadgetsserviceService {

  constructor(private messageservice:MessageserviceService) { }
  
  getgadget():Observable<gadgets[]>{
    this.messageservice.add('Gadgets are displayed....');
    return of(MyGadgets);
  }
}
