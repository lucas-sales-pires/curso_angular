import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName:string = "Lucas";
  userData = {email: 'joaquim@email.com', role: 'Admin',};

  title = 'curso_angular';
}
