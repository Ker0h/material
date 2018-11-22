import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'toggle', component: ToggleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
