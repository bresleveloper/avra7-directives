import { Directive, Input, ElementRef, OnInit, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShowcase]'
})
export class ShowcaseDirective implements OnInit {

  //get input color
  @Input('clickCountColor') color: string;

  //definitions
  el:HTMLElement
  constructor(elRef:ElementRef) { 
    this.el = elRef.nativeElement
  }
  ngOnInit(): void {
    this.el.style.color = this.color
    this.role = "student"
  }

  //listen to click event
  @HostListener('click') click() { 
    //alert(`my color is ${this.color}`)
    this.clickCountChange.emit(`my color is ${this.color} clicked`)
    this.clicked = !this.clicked
    this.borderColor = this.clicked ? "red" : "blue"
    this.role = "programmer"

  }

  //output event
  @Output() clickCountChange = new EventEmitter<string>();


  @HostBinding('class.clicked') clicked: boolean;
  @HostBinding('style.border-color') borderColor: string;
  @HostBinding('attr.role') role: string;
}
