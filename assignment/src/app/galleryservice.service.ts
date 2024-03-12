import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { gallery } from './gallery/gallery';
import { Mygallery } from './My-gallery';
import { MessageserviceService } from './messageservice.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryserviceService {

  constructor(private messageservice:MessageserviceService) { }
  getimages():Observable<gallery[]>{
    this.messageservice.add('Gallery is displayed.....');
    return of(Mygallery);
  }
}
