import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { ComponetCComponent } from './componet-c/componet-c.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    ComponetCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
