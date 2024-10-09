import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  private lista: Produto[] = [
    { codigo: 1, nome: 'Impostora: Yellowface', descritivo: 'Um livro intrigante sobre identidade.', valor: 53.90, quantidade: 10, keywords: 'ficção,identidade,Yellowface' },
    { codigo: 2, nome: 'Babel: Ou a necessidade de violência', descritivo: 'Uma narrativa poderosa e provocadora.', valor: 69.90, quantidade: 10, keywords: 'fantasia,babel' },
    { codigo: 3, nome: 'Pequena coreografia do adeus', descritivo: 'Um livro sobre despedidas e recomeços.', valor: 69.90, quantidade: 10, keywords: 'ficção,drama,Aline' },
    { codigo: 4, nome: 'Emma', descritivo: 'Clássico da literatura inglesa.', valor: 77.90, quantidade: 1, keywords: 'clássico,romance,jane' },
    { codigo: 5, nome: 'Eu que nunca conheci os homens', descritivo: 'Uma reflexão sobre relações.', valor: 59.90, quantidade: 10, keywords: 'ficção cientifica,distopia,violeta,clássico' },
    { codigo: 6, nome: 'Violeta', descritivo: 'Uma história sobre amor e superação.', valor: 49.90, quantidade: 10, keywords: 'ficção, familia' },
    { codigo: 7, nome: 'A natureza da mordida', descritivo: 'Um estudo sobre natureza e sociedade.', valor: 64.90, quantidade: 10, keywords: 'não-ficção,natureza' },
    { codigo: 8, nome: 'Quarto de despejo', descritivo: 'Um relato poderoso sobre a vida.', valor: 69.90, quantidade: 10, keywords: 'clássico,vida' },
    { codigo: 9, nome: 'Canção para ninar menino grande', descritivo: 'Uma história sensível e encantadora.', valor: 40.00, quantidade: 10, keywords: 'conceicao evaristo,brasileira' },
  ];

  public filtrarProdutos(filtro: string): Produto[] {
    if (!filtro) {
      return [...this.lista]; 
    } else {
      return this.lista.filter(produto =>
        produto.nome.toLowerCase().includes(filtro.toLowerCase()) || 
      produto.descritivo.toLowerCase().includes(filtro.toLowerCase()) ||
      produto.keywords.toLowerCase().includes(filtro.toLowerCase())
      );
    }
  }
}
