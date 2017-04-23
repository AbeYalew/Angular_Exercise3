import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  
private data= [{id:'1', name:'Asaad saad', email:'asaad@mum.edu'}];
  constructor() { }


    getData() {
        return this.data;
    }
}
