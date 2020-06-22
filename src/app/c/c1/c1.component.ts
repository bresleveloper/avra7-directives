import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  arr = [1,2,43,54]

  constructor(private el: ElementRef) { 
    //console.log(el);
    el.nativeElement
    
  }

  ngOnInit() {
  }

}
