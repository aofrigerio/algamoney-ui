import { PessoaFiltro } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { LancamentoFiltro } from 'src/app/lancamentos/lancamento.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [];
  totalRegistros = 5;
  filtro = new PessoaFiltro();

  constructor(private pessoaService: PessoaService) {}

  consultar(param){
    this.pesquisar(param.pagina);
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;
    const params = new HttpParams();

    this.pessoaService.pesquisar(this.filtro).then(dados =>  {
      this.pessoas = dados.pessoas;
      this.totalRegistros = dados.total;
    });
  }



}
