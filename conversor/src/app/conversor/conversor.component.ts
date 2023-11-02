import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoedasService } from './../moedas.service';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  currencyForm: FormGroup;
  currencies: any[]; // Array de moedas disponíveis
  conversionResult: any;

  constructor(private formBuilder: FormBuilder, private moedasService: MoedasService) {
    this.currencyForm = this.formBuilder.group({
      fromCurrency: ['', Validators.required],
      toCurrency: ['', Validators.required],
      amount: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Buscar as moedas disponíveis do serviço
    this.MoedasService.getAvailableCurrencies().subscribe(data => {
      this.currencies = data;
    });
  }

  convertCurrency() {
    if (this.currencyForm.valid) {
      const fromCurrency = this.currencyForm.get('fromCurrency').value;
      const toCurrency = this.currencyForm.get('toCurrency').value;
      const amount = this.currencyForm.get('amount').value;

      // Implementar a lógica de conversão usando a taxa de câmbio do serviço
      this.MoedasService.convertCurrency(fromCurrency, toCurrency, amount).subscribe(result => {
        this.conversionResult = result;
      });
    }
  }
}