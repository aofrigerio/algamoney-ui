import { PessoaService } from './../pessoa.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent  {

  @Input() pessoas;
  @Input() filtro;
  @Input() totalRegistros;

  @Output() mudarPagina = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;

    const param = {
      event,
      pagina
    }

    this.mudarPagina.emit(param);
  }

}
