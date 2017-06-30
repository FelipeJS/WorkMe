import { TrabalhoAnalise } from './../trabalho-analise/trabalho-analise';
import { TrabalhoFechado } from './../trabalho-fechado/trabalho-fechado';
import { Component } from '@angular/core';
import { Trabalho } from './../trabalho/trabalho';
import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class Home {
  
  trabalhosAbertos;
  trabalhosFechados;
  trabalhosAnalisados;
  aberto: number;
  analisado: number;
  fechado: number;

  constructor(public loadingCtrl: LoadingController, 
      public solicitacaoProvider: SolicitacaoProvider, private alertCtrl: AlertController) {
    this.trabalhosAbertos = Trabalho;
    this.trabalhosFechados = TrabalhoFechado;
    this.trabalhosAnalisados = TrabalhoAnalise;

    this.getContarSolicitacao();
  }

  getContarSolicitacao(){
    let load = this.presentLoading();
    this.solicitacaoProvider.getContarSolicitacao(1).subscribe(
      data => this.buildItens(data, load, 1), 
      err => this.errorAlert(err, load)
    );
    this.solicitacaoProvider.getContarSolicitacao(2).subscribe(
      data => this.buildItens(data, load, 2), 
      err => this.errorAlert(err, load)
    );
    this.solicitacaoProvider.getContarSolicitacao(3).subscribe(
      data => this.buildItens(data, load, 3), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load, tipo){
    if(tipo === 1)
      this.aberto = data;
    else if(tipo === 2)
      this.analisado = data;
    else
      this.fechado = data;
    load.dismiss();
  }

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    load.present();
    return load;
  }

  errorAlert(err, load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Falhou!',
      subTitle: 'Verifique sua conexão',
      buttons: ['Ok']
    });
    alert.present();
    console.log(err);
  }
}