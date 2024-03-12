import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { characterdetail } from './characterdetails/characterdetail';
import { Mycharacterdetail } from './My-characterdetail';

@Injectable({
  providedIn: 'root'
})
export class CharacterdetailserviceService {

  constructor() { }
  getcharacterdetail(id:number):Observable<characterdetail>{
    const charac=Mycharacterdetail.find(ch=>ch.id===id)!;
    return of(charac);
  }
}
