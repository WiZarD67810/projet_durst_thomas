import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueLineComponent } from './historique-line.component';

describe('HistoriqueLineComponent', () => {
  let component: HistoriqueLineComponent;
  let fixture: ComponentFixture<HistoriqueLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
