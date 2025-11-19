import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaBonitaPipe'
})
export class FechaBonitaPipePipe implements PipeTransform {

  transform(fecha: Date): string {
    const opciones: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return fecha.toLocaleDateString('es-ES', opciones);
  }

}
