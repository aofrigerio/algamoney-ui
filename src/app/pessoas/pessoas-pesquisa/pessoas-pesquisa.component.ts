import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    {nome: 'Alan Pinheiro', cidade: 'Uberlância', estado: 'MG', status: true},
    {nome: 'Manoel Pinheiro', cidade: 'Uberlância', estado: 'MG', status: true},
    {nome: 'Thynane Pinheiro', cidade: 'Uberlância', estado: 'MG', status: false},
    {nome: 'Manoel Pinheiro', cidade: 'Uberlância', estado: 'MG', status: true},
    {nome: 'Rafael Pinheiro', cidade: 'Uberlância', estado: 'MG', status: false},

  ];

}
