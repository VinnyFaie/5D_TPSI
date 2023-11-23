import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFiglioLibriComponent } from './componente-figlio-libri.component';

describe('ComponenteFiglioLibriComponent', () => {
  let component: ComponenteFiglioLibriComponent;
  let fixture: ComponentFixture<ComponenteFiglioLibriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteFiglioLibriComponent]
    });
    fixture = TestBed.createComponent(ComponenteFiglioLibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
