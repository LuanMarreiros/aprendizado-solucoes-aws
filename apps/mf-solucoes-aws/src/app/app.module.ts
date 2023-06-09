import { HomeModule } from './../../../../libs/home/src/lib/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
