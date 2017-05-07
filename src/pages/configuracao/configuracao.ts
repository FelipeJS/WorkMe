import { PessoaProvider } from './../../providers/pessoa-provider';
import { ConfiguracaoProvider } from './../../providers/configuracao-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'configuracao',
  templateUrl: 'configuracao.html'
})
export class Configuracao {
  item: any = {}; 
  configuracao: any = {};
  usuarioLogado;

  constructor(public navCtrl: NavController, public configuracaoProvider: ConfiguracaoProvider, public pessoaProvider: PessoaProvider,
              public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
      
      this.getConfiguracao();
  }

  getConfiguracao(){
    let load = this.presentLoading();

    this.configuracaoProvider.getConfiguracao().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.item = data;
    load.dismiss();
  }

  postConfiguracao(configuracaoForm){
    let load = this.presentLoading();

    this.configuracaoProvider.postConfiguracao(configuracaoForm.value).subscribe(
      data=>this.presentAlert(data,load),
      err=>this.errorAlert(err, load)
    );
  }

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    load.present();
    return load;
  }

  presentAlert(data,load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: data,
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
}