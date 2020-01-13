import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicApplicationStackComponent } from './basic-application-stack/basic-application-stack/basic-application-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicApplicationStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
