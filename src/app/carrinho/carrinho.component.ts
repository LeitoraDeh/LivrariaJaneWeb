import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();

  constructor() {
    let json = localStorage.getItem("cesta");
    if (json != null) {
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";
    } 
  }

  public removerItem(obj: Item) {
    this.cesta.itens = this.cesta.itens.filter(item => item !== obj);
    this.atualizarTotal();
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }

  public limparCesta() {
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";
  }

  private atualizarTotal() {
    this.cesta.total = this.cesta.itens.reduce((total, item) => total + item.valor, 0);
  }
}