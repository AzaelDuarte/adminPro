import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NoPagesFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
