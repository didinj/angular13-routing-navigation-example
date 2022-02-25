import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { SofaComponent } from './sofa/sofa.component';
import { DeskComponent } from './desk/desk.component';

@NgModule({
  declarations: [
    AppComponent,
    BedroomComponent,
    BathroomComponent,
    PageNotFoundComponent,
    LivingroomComponent,
    SofaComponent,
    DeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
