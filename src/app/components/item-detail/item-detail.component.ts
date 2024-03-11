import { Component } from '@angular/core';
import { Animal } from '../../Animal';

import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal;
  
  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.getAnimal()
  }

  getAnimal():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => {
      this.animal = animal
    })
  }
}
