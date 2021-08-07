import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService, private activityService: ActivityService) { }

  ngOnInit() {
    this.getHeroes();
  }

/*   onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.activityService.addActivities(`Activity: Selection done name=${hero.name}`);
  } */

  getHeroes(): void {
   this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
     /*    var that= this;
        this.heroService.getHeroes()
        .subscribe(function(items){
          that.heroes=items;
        }); */
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
