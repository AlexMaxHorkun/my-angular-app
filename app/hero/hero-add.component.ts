
import {Hero} from "../core/hero";
import {Component} from "@angular/core";

@Component({
    selector: 'hero-add',
    templateUrl: 'app/hero/hero-add.component.html'
})
export class HeroAddComponent
{
    public hero: Hero = new Hero();

    public submitted: boolean = false;

    public clearHero(): void
    {
        this.hero = new Hero();
    }

    public onSubmit(): void
    {

    }
}