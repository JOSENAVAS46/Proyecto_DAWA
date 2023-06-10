export class Proveedor {
  idProveedor: number;
  codigo: string;
  nombre: string;
  direccion: string;
  telefono: string;
  correoElectronico: string;

  constructor(
    _idProveedor: number,
    _codigo: string,
    _nombre: string,
    _direccion: string,
    _telefono: string,
    _correoElectronico: string
  ) {
    this.idProveedor = _idProveedor;
    this.codigo = _codigo;
    this.nombre = _nombre;
    this.direccion = _direccion;
    this.telefono = _telefono;
    this.correoElectronico = _correoElectronico;
  }
}
