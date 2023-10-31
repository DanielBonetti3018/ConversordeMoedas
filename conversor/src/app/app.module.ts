import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { FooterComponent } from './footer/footer.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ListagemComponent } from './listagem/listagem.component';
import { HistoricoComponent } from './historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    FooterComponent,
    ConversorComponent,
    ListagemComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
