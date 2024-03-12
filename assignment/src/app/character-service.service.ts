import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { character } from './character/character';
import { MyCharacter } from './My-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor() { }
  getchar():Observable<character[]>{
    return of(MyCharacter);
  }
}
