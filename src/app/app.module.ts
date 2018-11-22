import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';

import { ToggleComponent } from './toggle/toggle.component';
import { MatSlideToggleModule, MatSliderModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SelectComponent },
  { path: 'toggle', component: ToggleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
    AppComponent,
    ToggleComponent,
    SelectComponent
  ],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
