import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  public hoverCounter:number = 0
  public clickCounter:number = 0

}
