import { Component } from '@angular/core';
import { CharacterServiceService } from '../character-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { characterdetail } from './characterdetail';
@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterdetailsComponent {
   charcterdetail?:characterdetail;
   constructor(private activatedroute:ActivatedRoute, private location:Location,private characterservice:CharacterServiceService){}
   ngOnInit(){
    this.getcharacterdetail()
   }
   getcharacterdetail(){
    const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.characterservice.getcharacterdetail(id).subscribe(charac=>this.charcterdetail=charac);
   }
   goback(){
    this.location.back();
   }
}
