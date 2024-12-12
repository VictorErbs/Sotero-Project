import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component'; 


import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
