import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeroAddComponent} from "./hero-add.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroesMainComponent} from "./heroes-main.component";

export const heroRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'heroes',
        component: HeroesMainComponent,
        children: [
            {
                path: 'heroes',
                children: [
                    { path: 'hero-add', component: HeroAddComponent },
                    { path: 'detail/:id', component: HeroDetailComponent },
                    {path: '', component: HeroesComponent}
                ]
            }
        ]
    },
]);