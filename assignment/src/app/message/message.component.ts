import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgFor],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(public messageservice:MessageserviceService){}
  clear(){
    this.messageservice.clear();
  }
}
