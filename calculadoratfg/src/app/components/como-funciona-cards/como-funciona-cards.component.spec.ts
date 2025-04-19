import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFuncionaCardsComponent } from './como-funciona-cards.component';

describe('ComoFuncionaCardsComponent', () => {
  let component: ComoFuncionaCardsComponent;
  let fixture: ComponentFixture<ComoFuncionaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoFuncionaCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoFuncionaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
