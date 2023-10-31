import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { HistoricoComponent } from './historico/historico.component';
import { ConversorComponent } from './conversor/conversor.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'listagem', component:ListagemComponent },
  { path:'historico', component:HistoricoComponent },
  { path:'conversor', component:ConversorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
