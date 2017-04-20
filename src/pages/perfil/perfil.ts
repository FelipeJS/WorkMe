import { PessoaProvider } from './../../providers/pessoa-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class Perfil {

  item: any = {}; 
  pessoa: any = {};
  usuarioLogado;

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, public loadingCtrl: LoadingController, 
              public formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.pessoa = this.formBuilder.group({
      cdPessoa:['', Validators.required],
      documento:['', Validators.required],
      nome:['', Validators.required],
      fantasia:['', Validators.required],
      telefone:['', Validators.required],
      endereco:['', Validators.required],
      bairro:['', Validators.required],
      cidade:['', Validators.required],
      estado:['', Validators.required],
      email:['', Validators.required],
      categoria:['', Validators.required],
      tipo:['', Validators.required]
    });

    this.usuarioLogado = this.getUsuarioLogado();
    this.getPessoa(this.usuarioLogado);
  }

  getPessoa(usuarioLogado){
    this.pessoaProvider.getPessoa(usuarioLogado).subscribe(
      data => this.item = data, 
      err => console.log(err)
    );
    this.presentLoading();
  }

  postPessoa(){
    this.pessoaProvider.postPessoa(this.pessoa.value).subscribe(
      data=>this.presentAlert(),
      err=>this.errorAlert()
    );
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Buscando...',
      duration: 800
    }).present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Seus dados foram atualizados',
      buttons: ['Ok']
    });
    alert.present();
  }

  errorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Falhou!',
      subTitle: 'Algo deu errado',
      buttons: ['Ok']
    });
    alert.present();
  }

  getUsuarioLogado(){
    return 2;
  }
}
