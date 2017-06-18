import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SizerComponent} from './components/sizer/sizer.component';
import { FavouriteHero } from './components/favourite-hero/favourite-hero';
import { TemplateRefVariable } from './components/template-ref-variable/template-ref-variable';
import { HeroService } from './services/hero.service';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    FavouriteHero,
    SizerComponent,
    TemplateRefVariable
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
