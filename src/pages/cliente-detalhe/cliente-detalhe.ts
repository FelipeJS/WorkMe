import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TrabalhaParaProvider } from '../../providers/trabalha-para-provider';

@Component({
  templateUrl: 'cliente-detalhe.html'
})
export class ClienteDetalhe {

  item: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
      private alertCtrl: AlertController, public trabalhaParaProvider: TrabalhaParaProvider) {
    this.item = navParams.get('item');
  }

  adicionarFuncionario(){
    let load = this.presentLoading();
    this.trabalhaParaProvider.adicionarFuncionario(this.item.id).subscribe(
      data => this.presentAlert(load), 
      err => this.errorAlert(err, load)
    );
  }

  presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Funcionário adicionado com sucesso',
      buttons: ['Ok']
    });
    alert.present();
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