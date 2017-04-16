import { EmpresaDetalhe } from './../empresa-detalhe/empresa-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'empresa',
  templateUrl: 'empresa.html'
})
export class Empresa {
  itens;

  constructor(public navCtrl: NavController) {
    this.initializeItens();
  }

  initializeItens() {
    this.itens = [{
      'nmPessoa': 'LG Lugar de Gente',
      'nmFantasia':'LG',
      'nrDocumento': '155.200.666/0001-01',
      'dsEmail': 'lg@gmail.com',
      'nrTelefone': '62 993038153',
      'dsEndereco': 'Rua das mansões Q24 LT30',
      'dsBairro': 'Jardin Goiás',
      'dsCidade': 'Goiânia',
      'dsEstado': 'GO',
      'dsCategoria':'Vendas',
      'comentarios': [{
        'cdPessoa':3,
        'nmPessoa':'Roberto Arantes',
        'cdComentario':2,
        'dsComentario':'Empresa massa, bons produtos'
        },{
        'cdPessoa':2,
        'nmPessoa':'Allan Braga',
        'cdComentario':1,
        'dsComentario':'Adorei meu novo celular'
      }],
      'gostei': [{
        'cdPessoa':3,
        'snGostei':'S'
        },{
        'cdPessoa':2,
        'snGostei':'S'
        },{
        'cdPessoa':1,
        'snGostei':'N'
        }]
    },{
      'nmPessoa': 'WorkMe Curta seu Trabalho',
      'nmFantasia':'WorkMe',
      'nrDocumento': '155.200.666/0001-01',
      'dsEmail': 'workme@gmail.com',
      'nrTelefone': '62 993038153',
      'dsEndereco': 'Rua das mansões Q24 LT30',
      'dsBairro': 'Jardin Goiás',
      'dsCidade': 'Goiânia',
      'dsCategoria':'Serviços de Software',
      'dsEstado': 'GO',
      'servicos': [{
        'cdSevico': 1,
        'nmSevico': 'Venda de Computador',
        'dsServico': 'Computador i3 3.7Gz RAN 4GB HD 1TB',
        'dsCategoria':'Vendas'
      },{
        'cdSevico': 2,
        'nmSevico': 'Venda de Celular',
        'dsServico': 'Sansung J5 R$ 500,00',
        'dsCategoria':'Vendas' 
      }],
      'comentarios': [{
        'cdPessoa':3,
        'nmPessoa':'Roberto Arantes',
        'cdComentario':2,
        'dsComentario':'Empresa massa, bons produtos'
        },{
        'cdPessoa':2,
        'nmPessoa':'Allan Braga',
        'cdComentario':1,
        'dsComentario':'Adorei meu novo celular'
      }],
      'gostei': [{
        'cdPessoa':3,
        'snGostei':'S'
        },{
        'cdPessoa':2,
        'snGostei':'S'
        },{
        'cdPessoa':1,
        'snGostei':'N'
        }]
    }]
  }

  viewItem(item){
    this.navCtrl.push(EmpresaDetalhe, {
      item:item
    });
  }

  getItens(ev) {
    // Reset items back to all of the items
    this.initializeItens();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.nmPessoa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
