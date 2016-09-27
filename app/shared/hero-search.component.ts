import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Hero } from '../core/hero';
import {HeroesAPIService} from "../core/heroes-api.service";

@Component({
    selector: 'hero-search',
    templateUrl: 'app/shared/hero-search.component.html',
    styleUrls:  ['app/shared/hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    public heroes: Observable<Hero[]>;

    private searchTerms = new Subject<string>();

    constructor(
        private heroesApiService: HeroesAPIService,
        private router: Router) {}

    // Push a search term into the observable stream.
    public search(term: string): void {
        this.searchTerms.next(term);
    }

    public ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroesApiService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    public gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}