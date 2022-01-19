import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductViexComponent } from './cart-product-viex.component';

describe('CartProductViexComponent', () => {
  let component: CartProductViexComponent;
  let fixture: ComponentFixture<CartProductViexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductViexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductViexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
