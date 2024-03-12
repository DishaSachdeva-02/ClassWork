import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { GadgetsdetailsComponent } from './gadgetsdetails/gadgetsdetails.component';

export const routes: Routes = [
   {path:"characters" , component:CharacterComponent},
   {path:"gadgets" , component:GadgetsComponent},
   {path:"gallery" , component:GalleryComponent},
   {path:"", redirectTo:"/gallery" , pathMatch:"full"},
   {path:"character/:id" , component:CharacterdetailsComponent},
   {path:"gadget/:id",component:GadgetsdetailsComponent}
];
