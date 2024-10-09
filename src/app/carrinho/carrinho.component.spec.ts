import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrinhoComponent } from './carrinho.component';
import { CommonModule } from '@angular/common';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let fixture: ComponentFixture<CarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CarrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});