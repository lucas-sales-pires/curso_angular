import { Component } from '@angular/core';
import { Animal } from '../../Animal'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Turca', type: 'Cachorro',age: 3},
    {name: 'Tom', type: 'Gato',age : 2},
    {name: 'Frida', type: 'Cachorro',age: 5},
    {name: 'Mia', type: 'Gato',age: 1},
  ]
  animalDetails = ''
  showAge(animal:Animal) {
    this.animalDetails = `${animal.name} é um ${animal.type} e tem  ${animal.age} anos`
  }
}
