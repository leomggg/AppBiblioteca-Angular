import { Libro } from "./libro";

export class LibroService {
    libros: Libro [] = [

    ]

    getLista() {
        return this.libros;
    }

    eliminarLibro(isbn: number) {
        this.libros = this.libros.filter(lib => lib.ISBN != isbn);
    }

    anadirLibro(libro: Libro) {
        this.libros.push(libro);
    }

}
