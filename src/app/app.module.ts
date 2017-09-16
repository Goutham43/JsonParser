import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from './json/Data.service';
import { DataComponent } from './json/data.component';
import { ProcessDataComponent } from './processjson/data.component';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './navigation/app.nav';

@NgModule({
  providers: [DataService],
  imports:      [ BrowserModule, FormsModule, HttpModule,AppRoutingModule ],
  declarations: [ AppComponent,DataComponent,ProcessDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
