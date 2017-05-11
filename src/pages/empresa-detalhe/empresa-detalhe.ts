import { UsuarioComentario } from './../usuario-comentario/usuario-comentario';
import { ServicoProvider } from './../../providers/servico-provider';
import { EmpresaDetalheModal } from '../empresa-detalhe-modal/empresa-detalhe-modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'empresa-detalhe.html'
})
export class EmpresaDetalhe {

  item: any;
  servicos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
        public modalCtrl: ModalController, public servicoProvider: ServicoProvider, private alertCtrl: AlertController) {
    this.item = navParams.get('item');
    this.getServicos(this.item);
  }

  getServicos(item){
    let load = this.presentLoading();
    this.servicoProvider.getServicos(item.id).subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.servicos = data;
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

  openModal(cdServico) {
    let modal = this.modalCtrl.create(EmpresaDetalheModal, cdServico);
    modal.present();
  }

  viewItem(item){
    this.navCtrl.push(UsuarioComentario, {
      item:item
    });
  }
}