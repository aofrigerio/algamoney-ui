import { Data } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Data;
  dataVencimentoFim: Data;
}

@Injectable({
  providedIn: 'root'
})


export class LancamentoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8090/lancamentos';

  consultar(filtro: any): Promise<any> {

    //filtros
    let params = new HttpParams();

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

    const authToken = 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==';

    const headers = new HttpHeaders().set('Authorization', authToken);

    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type':  'application/json',
        'Authorization': authToken
      })
    };

    console.log(headers);

    return this.http.get(`${this.url}?resumo`, { headers, params } )
      .toPromise()
      .then(response =>
        response['content']);
  }

}
