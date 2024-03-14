import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { character } from './character/character';
import { MyCharacter } from './My-character';
import { MessageserviceService } from './messageservice.service';
import { characterdetail } from './characterdetails/characterdetail';
import { Mycharacterdetail } from './My-characterdetail';
@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private messageservice:MessageserviceService) { }
  getchar():Observable<character[]>{
    this.messageservice.add('Characters are displayed....');
    return of(MyCharacter);
  }
  getcharacterdetail(id:number):Observable<characterdetail>{
    const charac=Mycharacterdetail.find(ch=>ch.id===id)!;
    this.messageservice.add(`character displayed is ${id} `);
    return of(charac);
  }
}
