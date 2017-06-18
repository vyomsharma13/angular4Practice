import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './../../models/hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../../services/hero.service';
import 'rxjs/add/operator/switchMap';





@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
     <button  (click)="goBack()">Back</button>
     <button [ngClass]="currentClass" (click)="changeButtonStatus()">Change Button Status</button>
     <button [class.saveable]="currentClass.saveable"  [class.special]="currentClass.special" [class.modified]="currentClass.modified" (click)="changeButtonStatus()">Change Button Status 2</button>

  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  currentClass = {
    saveable: true,
    modified: false,
    special: false
  };

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  changeButtonStatus() {
    switch (this.hero.name) {
      case 'saveable': {
        this.currentClass = {
          saveable: true,
          modified: false,
          special: false
        };
        break;
      }
      case 'modified': {
        this.currentClass = {
          saveable: false,
          modified: true,
          special: false
        };
        break;
      }
      case 'special': {
         this.currentClass = {
          saveable: false,
          modified: false,
          special: true
        };
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
