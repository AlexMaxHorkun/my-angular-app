import {Component, OnInit} from '@angular/core';
import {Hero} from "../core/hero";
import {Router} from "@angular/router";
import {HeroesAPIService} from "../core/heroes-api.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public heroes: Hero[] = null;

    constructor(private heroesAPI: HeroesAPIService, private router: Router) {}

    public ngOnInit(): void {
        this.heroesAPI.getList()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    public gotoDetail(hero: Hero): void {
        this.router.navigateByUrl('/heroes/detail/' + hero.id);
    }
}