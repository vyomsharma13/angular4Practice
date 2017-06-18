import { Component } from '@angular/core';
import { Hero } from './../../models/hero';
import { HeroService } from './../../services/hero.service';

@Component({
    templateUrl: './favourite-hero.component.html',
    selector: 'fav-hero',
    styleUrls: ['./favourite-hero.component.css']
})


export class FavouriteHero {

    heroes: Hero[];
    myHero: Hero;

    constructor(heroService: HeroService) {
        this.heroes = [
            new Hero(1, 'Spider Man'),
            new Hero(2, 'Shaktimaan')
        ];
        this.myHero = this.heroes[0]
    }
}