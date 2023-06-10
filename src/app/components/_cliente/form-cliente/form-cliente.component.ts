import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
})
export class FormClienteComponent {
  cliente: Cliente = new Cliente(0, '', '', '', '', '');

  guardarCliente() {
    // Aquí puedes realizar alguna lógica para guardar el cliente
    console.log('Cliente guardado:', this.cliente);
  }
}
