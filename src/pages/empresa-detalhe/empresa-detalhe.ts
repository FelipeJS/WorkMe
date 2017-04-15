import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'empresa-detalhe.html'
})
export class EmpresaDetalhe {

  item: any;

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

}
