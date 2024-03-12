import { Component } from '@angular/core';
import { MygadgetsserviceService } from '../mygadgetsservice.service';
import { gadgets } from './gadgets';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-gadgets',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './gadgets.component.html',
  styleUrl: './gadgets.component.css'
})
export class GadgetsComponent {
  mygadgets?:gadgets[];
  constructor(private gadgetservice:MygadgetsserviceService){}
  ngOnInit(){
    this.getCharacter();
  }
  getCharacter(){
     this.gadgetservice.getgadget().subscribe(ch=>this.mygadgets=ch);
  }
}
