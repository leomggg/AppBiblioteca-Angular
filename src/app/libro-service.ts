import { Libro } from "./libro";
import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LibroService {

    libros: Libro [] = [
        {ISBN: 1, Titulo: "El Quijote", Autor:"Miguel de Cervantes", FechaPrestamo: new Date(2025, 2, 12)},
        {ISBN: 2, Titulo: "Rebelión en la Granja", Autor:"George Orwell", FechaPrestamo: new Date(2025, 4, 6)},
        {ISBN: 3, Titulo: "El Manifiesto Comunista", Autor:"Karl Marx", FechaPrestamo: new Date(2025, 5, 7)},
        {ISBN: 4, Titulo: "La Metamorfosis", Autor:"Franz Kafka", FechaPrestamo: new Date(2025, 25, 8)}
    ];

    //! Emisor de cambios
    librosSubject = new BehaviorSubject<Libro[]>(this.libros); 

    //! Observable público que la tabla consumirá
    get libros$(): Observable<Libro[]> {
        return this.librosSubject.asObservable();
    }

    //! Añadir libro y emitir cambios
    anadirLibro(libro: Libro) {
        this.libros.push(libro);
        this.librosSubject.next([...this.libros]); // Emitir cambios
    }

    //! Eliminar 1 libro por ISBN y emitir cambios
    eliminarLibro(isbn: number) {
        this.libros = this.libros.filter(a => a.ISBN != isbn);
        this.librosSubject.next([...this.libros]);
    }
}
