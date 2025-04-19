import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCardsComponent } from './descripcion-cards.component';

describe('DescripcionCardsComponent', () => {
  let component: DescripcionCardsComponent;
  let fixture: ComponentFixture<DescripcionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
