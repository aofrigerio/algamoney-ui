import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}


@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  url = 'http://localhost:8090/pessoas';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

        let params = new HttpParams();
        params = params.set('page', filtro.pagina.toString());
        params = params.set('size', filtro.itensPorPagina.toString());

        if(filtro.nome){
          params = params.set('nome',filtro.nome)
        }

        return this.http.get(this.url, { params })
        .toPromise()
        .then(response => {

        const dados = {
          pessoas: response['content'],
          total: response['totalElements']
        };
        return dados;
      } );
  }

  listarTodas(): Promise<any>{
    return this.http.get(this.url).toPromise().then(response => response['content'].nome);
  }

}
