import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDefaultComponent } from './calculadora-default.component';

describe('CalculadoraDefaultComponent', () => {
  let component: CalculadoraDefaultComponent;
  let fixture: ComponentFixture<CalculadoraDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
