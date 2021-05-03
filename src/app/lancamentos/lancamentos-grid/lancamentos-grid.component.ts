import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {

  @Input() lancamentos;
  @Input() filtro;
  @Input() totalRegistros;

  @Output() mudarPagina = new EventEmitter();
  @Output() excluido = new EventEmitter();

  @ViewChild('tabela', {static: true}) grid: Table;

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;

    const param = {
      event,
      pagina
    }

    this.mudarPagina.emit(param);
  }

  excluir(event: Event, tabela: any){
    this.excluido.emit(event);

    if(tabela.first == 0){
      this.mudarPagina.emit({event: Event, pagina: 0});
    } else {
      this.grid.reset();
    }

  }

}
