import { Component } from '@angular/core';
import { Animal } from '../../Animal'
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = []
  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  showAge(animal:Animal) {
    this.animalDetails = `${animal.name} é um ${animal.type} e tem  ${animal.age} anos`
  }
  removeAnimal(animal:Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }
  getAnimals():void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals
    })
  }

}
