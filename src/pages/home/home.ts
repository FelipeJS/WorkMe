import { TrabalhoAnalise } from './../trabalho-analise/trabalho-analise';
import { TrabalhoFechado } from './../trabalho-fechado/trabalho-fechado';
import { Component } from '@angular/core';
import { Trabalho } from './../trabalho/trabalho';

@Component({
  templateUrl: 'home.html'
})
export class Home {
  
  trabalhosAbertos;
  trabalhosFechados;
  trabalhosAnalisados;

  constructor() {
    this.trabalhosAbertos = Trabalho;
    this.trabalhosFechados = TrabalhoFechado;
    this.trabalhosAnalisados = TrabalhoAnalise;
  }
}