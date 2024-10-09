import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BuscaService } from '../services/busca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class VitrineComponent {
  filtro: string = '';

  constructor(private buscaService: BuscaService, private router: Router) {}

  public buscar(): void {
    // Salva o filtro no localStorage para ser acessado na página de busca
    localStorage.setItem('filtro', this.filtro);
    // Redireciona para a página de busca
    this.router.navigate(['/busca']); // Use o Router para navegar
  }
}