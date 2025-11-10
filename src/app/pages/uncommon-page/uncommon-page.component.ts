import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'John',
  gender: 'male',
  age: 31,
  address: 'Colombia',
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 32,
  address: 'España',
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export default class UncommonPageComponent {

  // i18n select
  clientsMap = signal({
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos clientes esperando',
    other: 'Tenemos # clientes eperando'

  })

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient() {
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1)
  };

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melisa',
    'Andrea',
    'Juan',
    'Carlos'
  ])

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }

  // Key value pipe
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  promiseValue : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Promesa finalizada')
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap( (value) => console.log('tap: ', value) )
  )

}
