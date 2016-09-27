import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {routing} from "./app.routing";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';
import {CoreModule} from "./core/core.module";


@NgModule({
    imports:      [ BrowserModule, routing, CoreModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }