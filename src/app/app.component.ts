import { Funcionario } from './../pages/funcionario/funcionario';
import { PessoaProvider } from './../providers/pessoa-provider';
import { TrabalhaParaProvider } from './../providers/trabalha-para-provider';
import { Servico } from './../pages/servico/servico';
import { Cliente } from './../pages/cliente/cliente';
import { Perfil } from './../pages/perfil/perfil';
import { Empresa } from './../pages/empresa/empresa';
import { Home } from './../pages/home/home';
import { Solicitacao } from './../pages/solicitacao/solicitacao';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  activePage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
      public splashScreen: SplashScreen, public trabalhaParaProvider: TrabalhaParaProvider, 
      private alertCtrl: AlertController, public pessoaProvider: PessoaProvider) {
    this.initializeApp();

    this.verificarPerfil();
  }

  verificarPerfil(){
    this.pessoaProvider.getUsuarioLogado().subscribe(
      data => this.buildMenu(data), 
      err => this.errorAlert(err)
    );
  }

  buildMenu(usuarioLogado){
    if(usuarioLogado.tipo == 2){
      this.pages = [
        { title: 'Trabalho', component: Home },
        { title: 'Empresas', component: Empresa },
        { title: 'Clientes', component: Cliente },
        { title: 'Funcionários', component: Funcionario },
        { title: 'Minhas Solicitações', component: Solicitacao },
        { title: 'Serviços/Produtos', component: Servico },
        { title: 'Perfil', component: Perfil }
      ];
      this.rootPage = Home;
      this.activePage = this.pages[0];
    }else{
      this.trabalhaParaProvider.verificarPerfil().subscribe(
        data => this.buildMenuCliente(data), 
        err => this.errorAlert(err)
      );
    }
  }

  buildMenuCliente(trabalhos){
    if(trabalhos.length === 0){
       this.pages = [
        { title: 'Empresas', component: Empresa },
        { title: 'Minhas Solicitações', component: Solicitacao },
        { title: 'Perfil', component: Perfil }
      ];
      this.rootPage = Empresa;
      this.activePage = this.pages[0];
    }else{
      this.pages = [
        { title: 'Trabalho', component: Home },
        { title: 'Empresas', component: Empresa },
        { title: 'Minhas Solicitações', component: Solicitacao },
        { title: 'Perfil', component: Perfil }
      ];
      this.rootPage = Home;
      this.activePage = this.pages[0];
    }
    
   }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }

  errorAlert(err) {
    console.log(err);
  }
}