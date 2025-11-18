import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Libro } from '../libro';
import { LibroService } from '../libro-service';
import { ResaltarDirective } from "../resaltar-directive";

@Component({
  selector: 'app-hijo-tabla',
  standalone: true,
  imports: [CommonModule, ResaltarDirective],
  templateUrl: './hijo-tabla.html',
  styleUrl: './hijo-tabla.css',
})

export class HijoTabla {

  libros$: Observable<Libro[]>;

  constructor(private libroService: LibroService) {
    this.libros$ = this.libroService.libros$; //! Observable de libros que se actualiza automáticamente
  }


  //! La condicion para ponerlo en rojo es que hayan pasado mas de 6 meses desde que se prestó
  isVencido(fecha?: Date): boolean {
    if (!fecha) return false;

    const fechaPrestamo = new Date (fecha);
    const hoy = new Date(); //Si lo ponemos vacío es la fecha de hoy¿?

    const limite6meses = new Date(fechaPrestamo);
    limite6meses.setMonth(limite6meses.getMonth() + 6)

    return hoy > limite6meses;
  }

  eliminarLibro(isbn: number) {
    this.libroService.eliminarLibro(isbn);
  }
}
