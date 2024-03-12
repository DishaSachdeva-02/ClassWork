import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }
  message?:string[]=[];
  add(msg:string){
    this.message?.push(msg);
  }
  clear(){
    this.message=[];
  }
}
