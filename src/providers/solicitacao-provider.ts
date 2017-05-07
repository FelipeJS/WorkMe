import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SolicitacaoProvider {

  api:string = 'http://localhost:9090/solicitacao/';

  constructor(public http: Http) {}

  getServicos(userId){
    return this.http.get(this.api + 'listarPorUsuario?userId=' + userId).map(res => res.json())
  }

  getServico(cdServico){
    return this.http.get(this.api + 'consultar?cdServico=' + cdServico).map(res => res.json())
  }

  getSolicitacoesAbertas(){
    return this.http.get(this.api + 'listarAbertos').map(res => res.json())
  }

  getSolicitacoesAnalisadas(){
    return this.http.get(this.api + 'listarAnalisados').map(res => res.json())
  }

  getSolicitacoesFechadas(){
    return this.http.get(this.api + 'listarFechados').map(res => res.json())
  }

  getMySolicitacoes(){
    return this.http.get(this.api + 'listarMinhasSolicitacoes').map(res => res.json())
  }

  deleteServico(cdServico){
    return this.http.get(this.api + 'excluir?cdServico=' + cdServico).map(res => res.json())
  }

  postSolicitacao(descricao, cdServico){
    return this.http.get(this.api + 'salvar?descricao=' + descricao + '&cdServico=' + cdServico).map(res => res.json())
  }

  aceitarSolicitacao(solicitacao){
    return this.http.post(this.api + "aceitar", solicitacao, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }

  recusarSolicitacao(solicitacao){
    return this.http.post(this.api + "recusar", solicitacao, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }
}
