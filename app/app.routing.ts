import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './hero/heroes.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {HeroAddComponent} from "./hero/hero-add.component";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        loadChildren: 'app/hero/hero.module#HeroModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);