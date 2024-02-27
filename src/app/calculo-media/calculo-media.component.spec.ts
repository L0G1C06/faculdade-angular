import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoMediaComponent } from './calculo-media.component';

describe('CalculoMediaComponent', () => {
  let component: CalculoMediaComponent;
  let fixture: ComponentFixture<CalculoMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculoMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculoMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
