import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { ComponetBComponent } from './componet-b/componet-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    ComponetBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
