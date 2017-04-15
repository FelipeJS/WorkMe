import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'trabalho-fechado-detalhe.html'
})
export class TrabalhoFechadoDetalhe {

  item: any;
  comentarios = [{
    'cdPessoa':1,
    'nmPessoa':'Eliakin Delbo',
    'cdServico':1,
    'cdComentario':1,
    'dsComentario':'Resolvido'
  },{
    'cdPessoa':2,
    'nmPessoa':'Allan Braga',
    'cdServico':1,
    'cdComentario':2,
    'dsComentario':'Obrigado man'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

}
