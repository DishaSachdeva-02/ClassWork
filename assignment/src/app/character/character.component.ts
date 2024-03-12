import { Component } from '@angular/core';
import { character } from './character';
import { CharacterServiceService } from '../character-service.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  mycharacter?:character[];
  constructor(private characterservice:CharacterServiceService){}
  ngOnInit(){
    this.getCharacter();
  }
  getCharacter(){
     this.characterservice.getchar().subscribe(ch=>this.mycharacter=ch);
  }
}
