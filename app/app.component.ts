import { Component } from '@angular/core';

import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/characters']">Characters</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
