import {Http} from "@angular/http";
import {Hero} from "./hero";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class HeroesAPIService {
    private cachedList: Hero[];

    private lastRefreshed: Date;

    public refreshRate: number = 10000;

    constructor(private http: Http) {}

    public getList(forceRefresh: boolean = false): Promise<Hero[]>
    {
        if (!forceRefresh && typeof this.cachedList != "undefined" && ((new Date()).getTime() - this.lastRefreshed.getTime()) < this.refreshRate) {
            return Promise.resolve(this.cachedList);
        }

        return this.http.get('/app/heroes').toPromise()
            .then(response => {
                this.cachedList = response.json().data as Hero[];
                this.lastRefreshed = new Date();

                return this.cachedList;
            });
    }

    public get(id: number): Promise<Hero>
    {
        return this.getList().then(heroes => heroes.find(hero => hero.id === id));
    }

    /**
     * Search by name, returning observable to manage multiple search requests.
     * @param term
     */
    public search(term: string): Observable<Hero[]>
    {
        return this.http.get('app/heroes?name=' + term).map(response => response.json().data as Hero[]);
    }
}