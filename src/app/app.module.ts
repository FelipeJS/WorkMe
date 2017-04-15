import { Servico } from './../pages/servico/servico';
import { FuncionarioDetalhe } from './../pages/funcionario-detalhe/funcionario-detalhe';
import { Funcionario } from './../pages/funcionario/funcionario';
import { ClienteDetalhe } from './../pages/cliente-detalhe/cliente-detalhe';
import { Cliente } from './../pages/cliente/cliente';
import { Configuracao } from './../pages/configuracao/configuracao';
import { Perfil } from './../pages/perfil/perfil';
import { EmpresaDetalhe } from './../pages/empresa-detalhe/empresa-detalhe';
import { Empresa } from './../pages/empresa/empresa';
import { TrabalhoAnaliseDetalhe } from './../pages/trabalho-analise-detalhe/trabalho-analise-detalhe';
import { TrabalhoFechadoDetalhe } from './../pages/trabalho-fechado-detalhe/trabalho-fechado-detalhe';
import { TrabalhoAnalise } from './../pages/trabalho-analise/trabalho-analise';
import { Home } from './../pages/home/home';
import { TrabalhoDetalhe } from './../pages/trabalho-detalhe/trabalho-detalhe';
import { Trabalho } from './../pages/trabalho/trabalho';
import { Solicitacao } from './../pages/solicitacao/solicitacao';
import { SolicitacaoDetalhe } from './../pages/solicitacao-detalhe/solicitacao-detalhe';
import { TrabalhoFechado } from './../pages/trabalho-fechado/trabalho-fechado';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Trabalho,
    ListPage,
    TrabalhoDetalhe,
    Home,
    TrabalhoFechado,
    TrabalhoAnalise,
    TrabalhoFechadoDetalhe,
    TrabalhoAnaliseDetalhe,
    Empresa,
    EmpresaDetalhe,
    Perfil,
    Configuracao,
    Cliente,
    ClienteDetalhe,
    Funcionario,
    FuncionarioDetalhe,
    Servico,
    Solicitacao,
    SolicitacaoDetalhe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Trabalho,
    ListPage,
    TrabalhoDetalhe,
    Home,
    TrabalhoFechado,
    TrabalhoAnalise,
    TrabalhoFechadoDetalhe,
    TrabalhoAnaliseDetalhe,
    Empresa,
    EmpresaDetalhe,
    Perfil,
    Configuracao,
    Cliente,
    ClienteDetalhe,
    Funcionario,
    FuncionarioDetalhe,
    Servico,
    Solicitacao,
    SolicitacaoDetalhe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
