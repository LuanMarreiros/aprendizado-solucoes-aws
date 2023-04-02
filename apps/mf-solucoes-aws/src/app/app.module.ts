import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '../../../../libs/home/src/lib/home.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
