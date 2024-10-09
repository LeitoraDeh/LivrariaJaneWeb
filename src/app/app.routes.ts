import { Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';
export const routes: Routes = [
    {path:"busca", component:BuscaComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"carrinho", component:CarrinhoComponent},
    {path:"detalhe", component:DetalheComponent},
    {path:"login", component:LoginComponent},
    {path:"vitrine", component:VitrineComponent},
    { path: '', redirectTo: '/vitrine', pathMatch: 'full' }
];
