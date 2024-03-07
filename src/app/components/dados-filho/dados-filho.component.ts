import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dados-filho',
  templateUrl: './dados-filho.component.html',
  styleUrl: './dados-filho.component.css'
})
export class DadosFilhoComponent {
  @Input() name:string = '';
  @Input() userData: {email: string, role: string} = {email: '', role: ''};


};
