import { Funcionario } from './../funcionario/funcionario';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TrabalhaParaProvider } from '../../providers/trabalha-para-provider';

@Component({
  templateUrl: 'funcionario-detalhe.html'
})
export class FuncionarioDetalhe {

  item: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
      private alertCtrl: AlertController, public trabalhaParaProvider: TrabalhaParaProvider) {
    this.item = navParams.get('item');
  }

  removerFuncionario(){
    let load = this.presentLoading();

    this.trabalhaParaProvider.removerFuncionario(this.item.id).subscribe(
      data => this.presentAlert(load), 
      err => this.errorAlert(err, load)
    );
  }

  presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Funcionário removido com sucesso',
      buttons: ['Ok']
    });
    this.viewItem();
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

  viewItem(){
    this.navCtrl.push(Funcionario, {});
  }
}