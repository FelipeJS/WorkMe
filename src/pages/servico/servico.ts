import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'servico',
  templateUrl: 'servico.html'
})
export class Servico {

  itens = [];
  servico = {};

  constructor(public navCtrl: NavController) {

  }

  salvarServico(servico){
    this.itens.push(servico);
    this.servico = {};
  }
  
}
