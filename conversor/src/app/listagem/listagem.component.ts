import { MoedasService } from './../moedas.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IListCurrencies } from '../model/IListCurrencies';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(private moedasService: MoedasService) { }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }

    this.moedasService.getCurrenciesNames().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const currenciesArray: IListCurrencies[] = response.supported_codes.map((currency: any) => {
            return {
              symbol: currency[0],
              name: currency[1]
            };
          });
          this.dataSource.data = currenciesArray;
        }
      },
      (error) => {
        console.error('Erro na solicitação:', error);
      }
    );
  }
}
