import { Component } from '@angular/core';
import { gadgetsdetails } from './gadgetdetail';
import { ActivatedRoute } from '@angular/router';
import { GadgetdetailserviceService } from '../gadgetdetailservice.service';
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
  constructor(private activatedroute:ActivatedRoute, private location:Location,private gadgetdetailservice:GadgetdetailserviceService){}
  ngOnInit(){
   this.getcharacterdetail()
  }
  getcharacterdetail(){
   const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
   this.gadgetdetailservice.getgadgetdetail(id).subscribe(charac=>this.gadgetdetail=charac);
  }
  goback(){
    this.location.back();
  }
}
