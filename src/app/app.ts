import { Component } from '@angular/core';
import { Login } from "./login/login";
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HijoFormulario } from './hijo-formulario/hijo-formulario';
import { HijoTabla } from './hijo-tabla/hijo-tabla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Login, HijoFormulario, HijoTabla],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loginEnviado = false;

  mostrarPag() {
    this.loginEnviado = true;
  }

  constructor(){}
}

bootstrapApplication(App).catch(err => console.error(err));