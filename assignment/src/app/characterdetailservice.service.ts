import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { characterdetail } from './characterdetails/characterdetail';
import { Mycharacterdetail } from './My-characterdetail';
import { MessageserviceService } from './messageservice.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterdetailserviceService {

  constructor(private messageservice:MessageserviceService) { }
  getcharacterdetail(id:number):Observable<characterdetail>{
    const charac=Mycharacterdetail.find(ch=>ch.id===id)!;
    this.messageservice.add(`character displayed is ${id} `);
    return of(charac);
  }
}
