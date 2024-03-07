import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size: number = 40;
  font: string = 'Arial';
  color: string = 'black';
  classes = ['green-title', 'small-title']
}
