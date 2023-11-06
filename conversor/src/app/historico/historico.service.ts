import { Injectable } from '@angular/core';
import { IListHistory } from '../model/IListHistory';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private history: IListHistory[] = [];

  constructor() { 
    const historyData: IListHistory[] = JSON.parse(localStorage.getItem('history') || '[]');
    this.history = historyData;
  }

  adicionarConversao(conversao: IListHistory) {
    this.history.push(conversao);
    localStorage.setItem('history', JSON.stringify(this.history));
    console.log(conversao)
  }

  obterHistoricoCompleto(): IListHistory[] {
    return this.history;
  }

  excluirHistorico(conversao: IListHistory) {
    var index = this.history.map(function(e) { return e.id; }).indexOf(conversao.id);

    console.log('conversão', conversao)
    console.log(this.history)
    console.log('Índice:', index);
    if (index !== -1) {
      this.history.splice(index, 1);
      this.atualizarHistorico();
    
      console.log(conversao)
    }
  }

  private atualizarHistorico() {
    localStorage.setItem('history', JSON.stringify(this.history));
    console.log("atualizado")
  }

}