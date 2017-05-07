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

  getMyServicos(){
    return this.http.get(this.api + 'listar').map(res => res.json())
  }

  deleteServico(cdServico){
    return this.http.get(this.api + 'excluir?cdServico=' + cdServico).map(res => res.json())
  }

  postSolicitacao(solicitacao){
    return this.http.post(this.api + "salvar", solicitacao, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }
}
