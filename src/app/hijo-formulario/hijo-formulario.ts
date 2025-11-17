import { Component } from '@angular/core';
import { Libro } from '../libro'
import { LibroService } from '../libro-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hijo-formulario.html',
  styleUrls: ['./hijo-formulario.css'],
})

export class HijoFormulario {
  
  isbn: number = 0;
  titulo: string = '';
  autor: string = '';
  fecha: Date = new Date();

  constructor(private libroService: LibroService) {}

  anadirPrestamo() {
    const nuevo: Libro = {
      ISBN: this.isbn,
      Titulo: this.titulo,
      Autor: this.autor,
      FechaPrestamo: this.fecha
    };

    this.libroService.anadirLibro(nuevo); // llamada al servicio para añadir el libro

    //! Limpiar campos
    this.isbn = 0;
    this.titulo = '';
    this.autor = '';
    this.fecha = new Date( 0, 0, 0);
  }
}
