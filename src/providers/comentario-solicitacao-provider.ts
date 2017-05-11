import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComentarioSolicitacaoProvider {

  api:string = 'http://localhost:9090/comentarioSolicitacao/';

  constructor(public http: Http) {}

  getComentarios(cdSolicitacao){
    return this.http.get(this.api + 'listar?cdSolicitacao=' + cdSolicitacao).map(res => res.json())
  }

  postComentarioSolicitacao(cdSolicitacao, descricao){
    return this.http.get(this.api + 'salvar?cdSolicitacao=' + cdSolicitacao + '&descricao=' + descricao).map(res => res.json())
  }
}