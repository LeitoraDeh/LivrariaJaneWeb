// src/app/busca/busca.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { FormsModule } from '@angular/forms';
import { BuscaService } from '../services/busca.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
verDetalhe(_t56: Produto) {
throw new Error('Method not implemented.');
}
adicionarItem(_t56: Produto) {
throw new Error('Method not implemented.');
}
  public mensagem: string = "";
  public filtro: string = "";
  public produtosFiltrados: Produto[] = []; 

  constructor(private buscaService: BuscaService) {}

  public ngOnInit(): void {
    const filtroSalvo = localStorage.getItem('filtro');
    if (filtroSalvo) {
      this.filtro = filtroSalvo;
      this.produtosFiltrados = this.buscaService.filtrarProdutos(this.filtro);
    }
  }

  public atualizarFiltro() {
    localStorage.setItem('filtro', this.filtro);
    this.produtosFiltrados = this.buscaService.filtrarProdutos(this.filtro);
  }
  
}
