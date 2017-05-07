import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { Component } from '@angular/core';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { SolicitacaoDetalhe } from '../solicitacao-detalhe/solicitacao-detalhe';

@Component({
  selector: 'solicitacao',
  templateUrl: 'solicitacao.html'
})
export class Solicitacao {
  itens = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
      public solicitacaoProvider: SolicitacaoProvider, private alertCtrl: AlertController) {
    
    this.getMySolicitacoes();
  }

  getMySolicitacoes(){
    let load = this.presentLoading();
    this.solicitacaoProvider.getMySolicitacoes().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
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

  viewItem(item){
    this.navCtrl.push(SolicitacaoDetalhe, {
      item:item
    });
  }
}