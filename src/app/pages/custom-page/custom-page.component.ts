import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToogleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export default class CustomPageComponent {

  name = signal('John Freddy Tutistar');
  nameButton = signal('ToggleCase')

  upperCase = signal(false)

  heroes = signal(heroes)

}

console.log(heroes)
