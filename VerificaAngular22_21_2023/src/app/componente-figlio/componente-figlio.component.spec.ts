import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFiglioComponent } from './componente-figlio.component';

describe('ComponenteFiglioComponent', () => {
  let component: ComponenteFiglioComponent;
  let fixture: ComponentFixture<ComponenteFiglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteFiglioComponent]
    });
    fixture = TestBed.createComponent(ComponenteFiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
