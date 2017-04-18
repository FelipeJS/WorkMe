import { ModalContentPage } from '../empresa-detalhe-modal/empresa-detalhe-modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'empresa-detalhe.html'
})
export class EmpresaDetalhe {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.item = navParams.get('item');
  }

  servicos = [{
    'cdSevico': 1,
    'nmSevico': 'Venda de Computador',
    'dsServico': 'Computador i3 3.7Gz RAN 4GB HD 1TB',
    'dsCategoria':'Vendas'
  },{
    'cdSevico': 2,
    'nmSevico': 'Venda de Celular',
    'dsServico': 'Sansung J5 R$ 500,00',
    'dsCategoria':'Vendas' 
  }]

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}




