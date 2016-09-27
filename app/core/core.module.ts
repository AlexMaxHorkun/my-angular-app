import {NgModule, Optional, SkipSelf}      from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeroesAPIService} from "./heroes-api.service";
import {MatchesValidatorDirective} from "./standard-validators";
import {HttpModule} from "@angular/http";


@NgModule({
    imports:      [ CommonModule, HttpModule],
    declarations: [ MatchesValidatorDirective ],
    exports: [ MatchesValidatorDirective ],
    providers: [HeroesAPIService]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}