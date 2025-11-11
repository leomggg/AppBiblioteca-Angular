import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Libro } from './libro';
import { LibroService } from './libro-service';
import { Login } from "./login/login";
import { bootstrapAppScopedEarlyEventContract } from '@angular/core/primitives/event-dispatch';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
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


}

bootstrapApplication(App).catch(err => console.error(err));