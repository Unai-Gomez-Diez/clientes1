import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Grupo } from './cliente.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Cliente[] = []

  getGrupos() {

  }
  setClientes(newCliente: Cliente) {
    this.clientes.push(newCliente)
  }
  getClientes(): Cliente[] {
    return this.clientes;
  }
}
