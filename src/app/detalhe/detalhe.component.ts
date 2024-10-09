import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BuscaService } from '../services/busca.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detalher',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.css'],
    standalone: true,
    imports: [FormsModule]
  })
  export class DetalheComponent {
    filtro: string = '';
  
    constructor(private buscaService: BuscaService, private router: Router) {}
  
    public buscar(): void {
      localStorage.setItem('filtro', this.filtro);

      this.router.navigate(['/busca']); 
    }
  }