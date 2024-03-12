import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { character } from './character/character';
import { MyCharacter } from './My-character';
import { MessageserviceService } from './messageservice.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private messageservice:MessageserviceService) { }
  getchar():Observable<character[]>{
    this.messageservice.add('Characters are displayed....');
    return of(MyCharacter);
  }
}
