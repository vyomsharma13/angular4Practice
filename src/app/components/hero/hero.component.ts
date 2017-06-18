import { Component, OnInit } from '@angular/core';

import { Hero } from './../../models/hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  providers: [HeroService],
  styleUrls:['./hero.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
