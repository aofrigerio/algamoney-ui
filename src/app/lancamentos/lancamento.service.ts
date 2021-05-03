import { Data } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Data;
  dataVencimentoFim: Data;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})


export class LancamentoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8090/lancamentos';

  authToken = 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==';

  consultar(filtro: LancamentoFiltro): Promise<any> {

    //filtros
    let params = new HttpParams();
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio){
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if(filtro.dataVencimentoFim){
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }


    //const headers = new HttpHeaders({ Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='});



    const headers = new HttpHeaders().set('Authorization', this.authToken);

    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
    
    return this.http.get(`${this.url}?resumo`, { headers, params } )
      .toPromise()
      .then(response => {
        const lancamentos = response['content'];
        const resultado = {
          lancamentos,
          total: response['totalElements']
        }
        return resultado;
      }

      )

  }

  excluir(id: number): Promise<void> {

    const headers = new HttpHeaders().set('Authorization', this.authToken);

    return this.http.delete(`${this.url}/${id}`, { headers })
    .toPromise()
    .then(() => null);
  }

}
