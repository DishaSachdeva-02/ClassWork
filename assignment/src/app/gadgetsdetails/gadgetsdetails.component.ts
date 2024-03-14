import { Component } from '@angular/core';
import { gadgetsdetails } from './gadgetdetail';
import { ActivatedRoute } from '@angular/router';
import { MygadgetsserviceService } from '../mygadgetsservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gadgetsdetails',
  standalone: true,
  imports: [],
  templateUrl: './gadgetsdetails.component.html',
  styleUrl: './gadgetsdetails.component.css'
})
export class GadgetsdetailsComponent {
  gadgetdetail?:gadgetsdetails;
  constructor(private activatedroute:ActivatedRoute, private location:Location,private gadgetservice:MygadgetsserviceService){}
  ngOnInit(){
   this.getcharacterdetail()
  }
  getcharacterdetail(){
   const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
   this.gadgetservice.getgadgetdetail(id).subscribe(charac=>this.gadgetdetail=charac);
  }
  goback(){
    this.location.back();
  }
}
