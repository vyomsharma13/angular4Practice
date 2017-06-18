import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './../../models/hero';

@Component({
    selector: 'template-ref-variable',
    template: `
    <form (ngSubmit)="onSubmit(heroForm,phone)" #heroForm="ngForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control"  name="name" required [(ngModel)]="hero.name">

            <input class="form-control" #phone type="text">
           
        </div>
        <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
    </form>

    `,
})


export class TemplateRefVariable {
    hero: Hero=new Hero(1,'Vyom');
    onSubmit(formvar,phone) {
        //var phoneNumber = phonevar.value;
        var forme = formvar;
    }
}
