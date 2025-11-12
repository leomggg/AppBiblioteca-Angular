import { Component } from '@angular/core';
import { Libro } from './libro';
import { LibroService } from './libro-service';
import { Login } from "./login/login";
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  service = new LibroService;
  libros: Libro[] = this.service.getLista();

  loginEnviado = false;

  mostrarPag() {
    this.loginEnviado = true;
  }

  constructor(){}

}

bootstrapApplication(App).catch(err => console.error(err));