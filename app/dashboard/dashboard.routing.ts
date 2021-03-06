import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'dashboard', component: DashboardComponent }
]);