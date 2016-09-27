import { NgModule }      from '@angular/core';
import {dashboardRouting} from "./dashboard.routing";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [ SharedModule, dashboardRouting],
    declarations: [DashboardComponent],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }