import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PessoaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PessoaProvider {

  api:string = 'http://192.168.25.7:9090/pessoa/';

  constructor(public http: Http) {}

  getPessoas(){
    return this.http.get(this.api + 'listar').map(res => res.json())
  }

  getPessoa(cdPessoa){
    return this.http.get(this.api + 'consultar?cdPessoa=' + cdPessoa).map(res => res.json())
  }

  postPessoa(params){
    return this.http.post(this.api + "salvar", params, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }

}
