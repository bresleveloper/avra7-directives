import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c/c1/c1.component';
import { AppHighlightDirective } from './d/app-highlight.directive';
import { ResultsComponent } from './c/results/results.component';
import { ShowcaseDirective } from './d/showcase.directive';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    AppHighlightDirective,
    ResultsComponent,
    ShowcaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
