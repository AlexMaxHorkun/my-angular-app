import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeroAddComponent} from "./hero-add.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroesMainComponent} from "./heroes-main.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HeroesMainComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'hero-add', component: HeroAddComponent },
                    { path: 'detail/:id', component: HeroDetailComponent },
                    {path: '', component: HeroesComponent}
                ]
            }
        ]
    },
]);