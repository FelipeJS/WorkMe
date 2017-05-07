import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { TrabalhoDetalhe } from './../trabalho-detalhe/trabalho-detalhe';
import { Component } from '@angular/core';
import { LoadingController, AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho',
  templateUrl: 'trabalho.html'
})
export class Trabalho {
  itens = [];

  constructor(public navCtrl: NavController, public solicitacaoProvider: SolicitacaoProvider, 
      public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getSolicitacoes();
  }
  
  getSolicitacoes(){
    let load = this.presentLoading();
    this.solicitacaoProvider.getSolicitacoesAbertas().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    load.dismiss();
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

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    load.present();
    return load;
  }

  viewItem(item){
    this.navCtrl.push(TrabalhoDetalhe, {
      item:item
    });
  }
}