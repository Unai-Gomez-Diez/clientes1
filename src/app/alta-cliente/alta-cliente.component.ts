import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../cliente.model';
@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {
  constructor(private clientesService: ClientesService) { }
  clientes: Cliente[] | null | undefined;
  grupos = [
    {
      id: 0,
      nombre: 'Sin definir'
    },
    {
      id: 1,
      nombre: 'Activos'
    },
    {
      id: 2,
      nombre: 'Inactivos'
    },
    {
      id: 3,
      nombre: 'Deudores'
    },
  ]
  cliente: Cliente = {
    id: 0,
    nombre: '',
    cif: '',
    direccion: '',
    grupo: 0
  };


  guardar(nombre: string, dni: string, direccion: string, grupo: number) {
    // Asignar los valores al objeto cliente
    this.cliente.id = this.cliente.id++
    this.cliente.nombre = "puto";
    this.cliente.cif = dni;
    this.cliente.direccion = direccion;
    this.cliente.grupo = grupo;

    // Llamar al método adecuado (por ejemplo, addCliente) y pasar el objeto cliente
    this.clientesService.setClientes(this.cliente);
    this.clientes = this.clientesService.getClientes()
  }

  ngOnInit(): void {
    // Asegúrate de llamar al método de la manera correcta
    this.clientes = this.clientesService.getClientes();
  }
}
