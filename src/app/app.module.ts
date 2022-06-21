import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ElementsService } from './elements.service';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
