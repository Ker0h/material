import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleComponent } from './toggle/toggle.component';
import { MatSlideToggleModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
