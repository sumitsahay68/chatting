import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SumitComponent } from './sumit/sumit.component';
import { SahayComponent } from './sahay/sahay.component';
import { ChatService } from './chat.service';
import { AnthonyComponent } from './anthony/anthony.component';

@NgModule({
  declarations: [
    AppComponent,
    SumitComponent,
    SahayComponent,
    AnthonyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
