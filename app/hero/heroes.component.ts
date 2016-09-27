import {Component, OnInit} from '@angular/core';
import {Hero} from "../core/hero";
import {Router, ActivatedRoute} from "@angular/router";
import {HeroesAPIService} from "../core/heroes-api.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/hero/heroes.component.html',
    styleUrls: ['app/hero/heroes.component.css']
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[] = null;
    selectedHero: Hero;

    constructor(private heroesAPI: HeroesAPIService, private router: Router, private activeRoute: ActivatedRoute) {}

    public onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }

    private loadHeroes(): void
    {
        if (this.heroes === null) {
            this.heroesAPI.getList().then(heroes => this.heroes = heroes);
        }
    }

    public ngOnInit(): void {
        this.loadHeroes();
    }

    public gotoDetail(): void
    {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    public gotoNew(): void
    {
        this.router.navigate(['hero-add'], {relativeTo: this.activeRoute});
    }
}