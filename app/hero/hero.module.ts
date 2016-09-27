import { NgModule }      from '@angular/core';
import {HeroAddComponent} from "./hero-add.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroSearchComponent} from "../shared/hero-search.component";
import {HeroesComponent} from "./heroes.component";
import {routing} from "./hero.routing";
import {SharedModule} from "../shared/shared.module";
import {HeroesMainComponent} from "./heroes-main.component";


@NgModule({
    imports: [SharedModule, routing],
    declarations: [ HeroAddComponent, HeroDetailComponent, HeroesComponent, HeroesMainComponent ],
    exports: [HeroSearchComponent]
})
export class HeroModule { }