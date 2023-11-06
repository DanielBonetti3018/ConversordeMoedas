import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoedasService } from './../moedas.service';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moedas: any[] = [];
  Moedaorigem: string = '';
  NewMoeda: string = '';
  valor: number = 0;
  novoValor: number = 0;
  taxaConversao: number = 0;

  constructor(private moedasService: MoedasService) {}

  ngOnInit() {
    this.carregarMoedas();
  }

  carregarMoedas() {
    this.moedasService.getCurrenciesNames().subscribe(
      (response: any) => {
        if (response.result === 'success' && response.supported_codes) {
          this.moedas = response.supported_codes.map((currency: any) => {
            return {
              nome: currency[1],
              simbolo: currency[0]
            };
          });
        }
      },
      (error: any) => {
        console.error('Erro ao listar as moedas:', error);
      }
    );
  }

  converterMoeda() {
    if (this.Moedaorigem && this.NewMoeda && this.valor) {
      this.moedasService.getExchangeRate(this.Moedaorigem, this.NewMoeda, this.valor).subscribe(
        (response: any) => {
          if (response.result === 'success' && response.conversion_result) {
            this.novoValor = response.conversion_result;
            this.taxaConversao = response.conversion_rate;
          }
        },
        (error: any) => {
          console.error('Erro:', error);
        }
      );
    } else {
      console.error('Preencha todos os Campos');
    }
  }
}