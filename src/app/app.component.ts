import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trops';
  tr_log_email: string = "";
  tr_log_pass: string = "";
  tr_reg_email: string = "";
  tr_reg_pass: string = "";
  tr_reg_conf_pass: string = "";
  login(): void {

  }

  register(): void {
  }
  /* add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  } */
}
