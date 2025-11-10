import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export default class CustomPageComponent {

  name = signal('John Freddy Tutistar');

  upperCase = signal(false)

  heroes = signal(heroes)

}

console.log(heroes)
