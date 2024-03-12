import { Injectable } from '@angular/core';
import { gadgets } from './gadgets/gadgets';
import { MyGadgets } from './Mygadgets';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MygadgetsserviceService {

  constructor() { }
  
  getgadget():Observable<gadgets[]>{
    return of(MyGadgets);
  }
}
