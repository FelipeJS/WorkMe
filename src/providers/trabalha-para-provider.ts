import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrabalhaParaProvider {

  api:string = 'http://localhost:9090/trabalhaPara/';

  constructor(public http: Http) {}

  verificarPerfil(){
    return this.http.get(this.api + 'listar').map(res => res.json())
  }
}