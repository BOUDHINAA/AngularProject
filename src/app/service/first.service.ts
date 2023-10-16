import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  tab=['a','b'];

  addElementToTab(element:any){
    this.tab.push(element);
  }
  showTab(){
    console.log(this.tab);
  }
}
