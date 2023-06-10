import { Categoria } from './Categoria';

export class Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
  precioUnitario: number;
  stock: number;

  constructor(
    _idProducto: number,
    _nombre: string,
    _descripcion: string,
    _categoria: Categoria,
    _precioUnitario: number,
    _stock: number
  ) {
    this.idProducto = _idProducto;
    this.nombre = _nombre;
    this.descripcion = _descripcion;
    this.categoria = _categoria;
    this.precioUnitario = _precioUnitario;
    this.stock = _stock;
  }
}
