import { PessoaProvider } from './../../providers/pessoa-provider';
import { ConfiguracaoProvider } from './../../providers/configuracao-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms'

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

  postConfiguracao(configuracaoForm){
    let load = this.presentLoading();

    configuracaoForm.value.pessoa = this.getUsuarioLogado(load);

    this.configuracaoProvider.postConfiguracao(configuracaoForm.value).subscribe(
      data=>this.presentAlert(data,load),
      err=>this.errorAlert(err, load)
    );
  }

  getUsuarioLogado(load){
    this.pessoaProvider.getPessoa(1).subscribe(
      data => {return data}, 
      err => this.errorAlert(err, load)
    );
  }

  buildUsuarioLogado(data, load){
    this.usuarioLogado = data;
    load.dismiss();
  }

  buildItens(data, load){
    this.item = data;
    load.dismiss();
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

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    load.present();
    return load;
  }
 
}
