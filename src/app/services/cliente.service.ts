import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'https://localhost:7230/api';

  constructor() {}

  async getClientes(): Promise<Cliente[]> {
    try {
      const response = await fetch(`${this.apiUrl}/cliente`);
      const clientes = await response.json();
      return clientes;
    } catch (error) {
      console.error('Error obteniendo clientes:', error);
      throw error;
    }
  }

  async getClienteByCedula(cedula: string): Promise<Cliente> {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/cedula/${cedula}`);
      const cliente = await response.json();
      return cliente;
    } catch (error) {
      console.error('Error obteniendo cliente:', error);
      throw error;
    }
  }
}
