import { Component } from '@angular/core';
import { ServicoProvider } from '../../providers/servico-provider';
import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { NavParams, Platform, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'empresa-detalhe-modal.html'
})
export class EmpresaDetalheModal {
  servico = {};
  cdServico;
  solicitacao: any = {};

  constructor(public platform: Platform, public navParams: NavParams, public viewCtrl: ViewController, 
      public formBuilder: FormBuilder, public servicoProvider: ServicoProvider, public loadingCtrl: LoadingController,
      private alertCtrl: AlertController, public solicitacaoProvider: SolicitacaoProvider){
    
    this.cdServico = navParams.get('cdServico');
    this.getServico();

    this.solicitacao = this.formBuilder.group({
      descricao:['', Validators.required]
    });
  }

  getServico(){
    let load = this.presentLoading();
    this.servicoProvider.getServico(this.cdServico).subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.servico = data;
    load.dismiss();
  }

  postSolicitacao(descricao, cdServico){
    let load = this.presentLoading();
    this.solicitacaoProvider.postSolicitacao(descricao, cdServico).subscribe(
      data=>this.presentAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

  presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Solicitação realizada com sucesso',
      buttons: ['Ok']
    });
    alert.present();
    this.dismiss();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
}