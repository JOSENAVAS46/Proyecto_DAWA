export class Categoria {
  idCategoria: number;
  nombre: string;
  descripcion: string;

  constructor(_idCategoria: number, _nombre: string, _descripcion: string) {
    this.idCategoria = _idCategoria;
    this.nombre = _nombre;
    this.descripcion = _descripcion;
  }
}
