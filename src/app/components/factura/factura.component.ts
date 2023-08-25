import { Component } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { Cliente } from 'src/app/models/Cliente';
import { ProductoResponse } from 'src/app/models/ProductoResponse';
import { Producto } from 'src/app/models/Producto';
import { ItemFactura } from 'src/app/models/ItemFactura';
import { ClienteService } from 'src/app/services/cliente.service';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent {
  constructor(private clienteService: ClienteService,
    private categoriaService: CategoriaService) { }

  factura: Factura | null = null;
  cedulaCliente: string = '';
  cliente: Cliente = new Cliente(0, '', '', '', '', '');
  clienteEncontrado: boolean = false;
  productoSeleccionado: ProductoResponse | null = null;
  cantidad: number = 0;
  codigoProducto: string = '';
  productoEncontrado: Producto | null = null;
  lstProductos: ProductoResponse[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      categoria: 1,
      precioUnitario: 10.99,
      stock: 10,
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      categoria: 2,
      precioUnitario: 19.99,
      stock: 5,
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      categoria: 3,
      precioUnitario: 7.99,
      stock: 15,
    },
  ];
  lstClientes: Cliente[] = [
    {
      id: 1,
      cedula: '0924004914',
      nombre: 'Jose Navas',
      direccion: 'Guasmo Sur',
      telefono: '0963002366',
      correoElectronico: 'jose.navasordonez@gmail.com',
    },
    {
      id: 2,
      cedula: '0999999999',
      nombre: 'Consumidor Final',
      direccion: 'Guayaquil',
      telefono: '0999999999',
      correoElectronico: 'consumidorfinal@gmail.com',
    },
  ];



  async buscarCliente(): Promise<void> {
    try {
      this.cliente = await this.clienteService.getClienteByCedula(this.cedulaCliente);
    } catch (error) {
      console.error('Error al obtener cliente:', error);
    }
  }


  generarNuevaFactura(): void {
    const numeroFactura = this.generarNumeroFactura();
    const fechaEmision = new Date();

    this.factura = new Factura(
      1, // Puedes generar un ID único para la factura aquí
      numeroFactura,
      fechaEmision,
      this.cliente,
      [],
      0
    );
  }

  agregarItem(): void {
    if (this.productoEncontrado && this.cantidad > 0 && this.factura) {
      const item: ItemFactura = new ItemFactura(
        this.factura.items.length + 1,
        this.productoEncontrado,
        this.cantidad,
        this.productoEncontrado.precioUnitario
      );

      this.factura.items.push(item);

      this.codigoProducto = '';
      this.cantidad = 0;
      this.productoEncontrado = null;
    }
  }

  buscarProducto(): void {
    if (this.codigoProducto) {
      const productoEncontrado = this.buscarProductoPorCodigo(
        this.codigoProducto
      );

      if (productoEncontrado) {
        //igualar los productos atributo por atributoi
        this.productoEncontrado!.id = productoEncontrado.id;
        this.productoEncontrado!.nombre = productoEncontrado.nombre;
        this.productoEncontrado!.descripcion = productoEncontrado.descripcion;
        this.categoriaService.getCategoriaById(productoEncontrado.categoria)
        .then(categoria => {
          this.productoEncontrado!.categoria = categoria;
        })
        .catch(error => {
          console.error('Error obteniendo categoría:', error);
        });
        this.productoEncontrado!.precioUnitario = productoEncontrado.precioUnitario;
        this.productoEncontrado!.stock = productoEncontrado.stock;
      } else {
        this.productoEncontrado = null;
        // Aquí puedes mostrar un mensaje de error indicando que el producto no fue encontrado.
      }
    }
  }
  generarFactura(): void {
    if (this.factura && this.factura.items.length > 0) {
      let total: number = 0;

      this.factura.items.forEach((item) => {
        total += item.subtotal;
      });

      this.factura.montoTotal = total;
    }
  }

  buscarClientePorCedula(cedula: string): Cliente | null {
    // Lógica para buscar el cliente por cédula en tu sistema
    // Ejemplo de búsqueda estática

    const clienteEncontrado = this.lstClientes.find(
      (cliente) => cliente.cedula === cedula
    );
    return clienteEncontrado || null;
  }

  buscarProductoPorCodigo(codigo: string): ProductoResponse | null {
    const productoEncontrado = this.lstProductos.find(
      (producto) => producto.id.toString() === codigo
    );
    return productoEncontrado || null;
  }

  generarNumeroFactura(): string {
    // Lógica para generar un número de factura único en tu sistema
    // Ejemplo de generación estática
    const timestamp = new Date().getTime();
    return 'F-' + timestamp;
  }

  async obtenerCategoriaPorId(idCategoria: number): Promise<string> {
    var categoria = "";
    try {
      categoria = (await this.categoriaService.getCategoriaById(idCategoria))?.nombre!
    } catch (error) {
      console.error('Error al obtener categoría por id:', error);
    }
    return categoria;
  }

}
