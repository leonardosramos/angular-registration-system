import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  nomeBusca: string='';
  
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id","nome","cpf","dataNascimento","email", "acoes"]

  constructor(
    private service: ClienteService,
    private router: Router
  ){ 

  }

  ngOnInit(){

    this.listaClientes = this.service.pesquisarClientes('');

  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca)
    console.log("A pesquisa foi:" + this.nomeBusca)
  }

  preparaEditar(id: string){
    console.log("ID recebido", id)
    this.router.navigate(['/cadastro'], {queryParams: {"id": id}} )
  }

}
