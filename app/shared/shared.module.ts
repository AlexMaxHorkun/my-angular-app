import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroSearchComponent} from "./hero-search.component";


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ HeroSearchComponent ],
    exports: [CommonModule, FormsModule, HeroSearchComponent]
})
export class SharedModule { }