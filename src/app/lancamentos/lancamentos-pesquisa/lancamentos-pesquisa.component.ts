import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService,
              private messageService: MessageService
    ){}

  consultar(param){
    this.pesquisar(param.pagina);
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;
    //const params = new HttpParams();

    this.lancamentoService.consultar(this.filtro).then(dados => {
        this.lancamentos = dados.lancamentos;
        this.totalRegistros = dados.total;
      });
  }

  excluir(lancamento: any){
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() =>  this.messageService.add({severity:'success', summary:'Lancamento', detail:`Lançamento: ${lancamento.descricao} excluído com sucesso`}));
  }

}
