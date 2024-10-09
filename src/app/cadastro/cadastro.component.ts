import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BuscaService } from '../services/busca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  imports: [FormsModule]
})
export class CadastroComponent {
  filtro: string = '';

  constructor(private buscaService: BuscaService, private router: Router) {}

  public buscar(): void {
    
    localStorage.setItem('filtro', this.filtro);
    
    this.router.navigate(['/busca']); 
  }

}
