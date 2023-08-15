import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiUrl = 'https://localhost:7230/api';

  constructor() {}

  async getProveedores(): Promise<Proveedor[]> {
    try {
      const response = await fetch(`${this.apiUrl}/proveedor`);
      const proveedores = await response.json();
      return proveedores;
    } catch (error) {
      console.error('Error obteniendo proveedores:', error);
      throw error;
    }
  }

  async getProveedorByCode(code: string): Promise<Proveedor> {
    try {
      const response = await fetch(`${this.apiUrl}/proveedor/codigo/${code}`);
      const proveedor = await response.json();
      return proveedor;
    } catch (error) {
      console.error('Error obteniendo proveedor:', error);
      throw error;
    }
  }

  

  // Resto de los métodos
}
