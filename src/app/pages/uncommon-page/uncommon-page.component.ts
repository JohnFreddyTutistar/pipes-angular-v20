import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
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

}
