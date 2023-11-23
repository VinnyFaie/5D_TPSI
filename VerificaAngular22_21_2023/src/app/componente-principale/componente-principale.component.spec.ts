import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrincipaleComponent } from './componente-principale.component';

describe('ComponentePrincipaleComponent', () => {
  let component: ComponentePrincipaleComponent;
  let fixture: ComponentFixture<ComponentePrincipaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePrincipaleComponent]
    });
    fixture = TestBed.createComponent(ComponentePrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
