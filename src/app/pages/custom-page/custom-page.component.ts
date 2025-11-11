import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe, CanFlyPipe, HeroColorPipe],
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
