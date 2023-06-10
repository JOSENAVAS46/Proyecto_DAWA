import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent {
  categoria: Categoria = new Categoria(0, '', '');

  guardarCategoria(): void {
    // Lógica para guardar la categoría en la base de datos
    console.log('Categoría guardada:', this.categoria);
  }

}
