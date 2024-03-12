import { Component } from '@angular/core';
import { GalleryserviceService } from '../galleryservice.service';
import { gallery } from './gallery';
import { NgFor } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images?:gallery[];
  constructor(private galleryservice:GalleryserviceService,private location:Location){}
  ngOnInit(){
    this.getimages();
  }
  getimages(){
    this.galleryservice.getimages().subscribe(img=>this.images=img);
  }
  goback(){
    this.location.back();
  }
}
