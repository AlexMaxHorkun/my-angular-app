import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {Hero} from "./core/hero";

export class InMemoryDataService implements InMemoryDbService {
    public createDb() {
        let heroes = [
            new Hero(1, 'Tracer'),
            new Hero(2, 'Reaper'),
            new Hero(3, 'Soldier 76'),
            new Hero(4, 'Hanzo'),
            new Hero(5, 'Bastion'),
            new Hero(6, 'D.va'),
            new Hero(7, 'Zenyatta')
        ];

        return {heroes};
    }
}