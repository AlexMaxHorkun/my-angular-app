import { NgModule }      from '@angular/core';
import {routing} from "./dashboard.routing";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [ SharedModule, routing],
    declarations: [DashboardComponent],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }