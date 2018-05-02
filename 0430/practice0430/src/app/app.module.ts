import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //ngModel binding


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component'

import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component'
import { ChildInputComponent } from './parent-to-child-input/child-input.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentToChildInputComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
