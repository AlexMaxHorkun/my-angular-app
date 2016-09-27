import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../core/hero";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroesAPIService} from "../core/heroes-api.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit{
    @Input()
    public hero: Hero;

    constructor(private heroesAPI: HeroesAPIService, private activeRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.activeRoute.params.forEach((params: Params) => {
            let id: number = +params['id'];
            this.heroesAPI.get(id)
                .then(hero => this.hero = hero);
        });
    }

    public goBack(): void
    {
        window.history.back();
    }
}
