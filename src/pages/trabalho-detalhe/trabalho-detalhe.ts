import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'trabalho-detalhe.html'
})
export class TrabalhoDetalhe {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public loadingCtrl: LoadingController, public solicitacaoProvider: SolicitacaoProvider,
      private alertCtrl: AlertController) {
    this.item = navParams.get('item');
  }

  aceitarSolicitacao(solicitacao){
    let load = this.presentLoading();
    this.solicitacaoProvider.aceitarSolicitacao(solicitacao).subscribe(
      data=>this.presentAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

   presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Solicitação em análise',
      buttons: ['Ok']
    });
    alert.present();
  }

  recusarSolicitacao(solicitacao){
    let load = this.presentLoading();
    this.solicitacaoProvider.recusarSolicitacao(solicitacao).subscribe(
      data=>this.refuseAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

  refuseAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Solicitação recusada com sucesso',
      buttons: ['Ok']
    });
    alert.present();
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
}