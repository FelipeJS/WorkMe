import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfiguracaoProvider {

  //api:string = 'http://localhost:9090/configuracao/';
  api:string = 'http://meutrabalho.com.br/configuracao/';

  constructor(public http: Http) {}

  getConfiguracao(){
    return this.http.get(this.api + 'consultar').map(res => res.json())
  }

  postConfiguracao(configuracao){
    return this.http.post(this.api + "salvar", configuracao, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }
}