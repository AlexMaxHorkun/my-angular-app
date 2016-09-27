import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {routing} from "./app.routing";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';
import {CoreModule} from "./core/core.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {HeroModule} from "./hero/hero.module";


@NgModule({
    imports:      [ BrowserModule, CoreModule, routing, DashboardModule, HeroModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }