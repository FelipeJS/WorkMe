import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'solicitacao-detalhe.html'
})
export class SolicitacaoDetalhe {

  comentario;
  
  item: any;

  comentarios = [{
    'cdPessoa':1,
    'nmPessoa':'Eliakin Delbo',
    'cdServico':1,
    'cdComentario':1,
    'dsComentario':'Estamos efetuando o reparo'
  },{
    'cdPessoa':3,
    'nmPessoa':'Roberto Arantes',
    'cdServico':3,
    'cdComentario':2,
    'dsComentario':'Estou no aguardo da solução'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  enviarMensagem(){
    this.comentarios.push({
      'cdPessoa':3,
      'nmPessoa':'Roberto Arantes',
      'cdServico':3,
      'cdComentario':2,
      'dsComentario': this.comentario
    });
    this.comentario = "";
  }
}
