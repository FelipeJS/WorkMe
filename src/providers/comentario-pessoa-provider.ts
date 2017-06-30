import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ComentarioPessoaProvider {

  api:string = 'http://localhost:9090/comentarioPessoa/';
  //api:string = 'http://meutrabalho.com.br/comentarioPessoa/';

  constructor(public http: Http) {}

  getComentarios(userId){
    return this.http.get(this.api + 'listar?userId=' + userId).map(res => res.json())
  }

  postComentarioPessoa(userIdComentado, descricao){
    return this.http.get(this.api + 'salvar?userIdComentado=' + userIdComentado + '&descricao=' + descricao).map(res => res.json())
  }
}