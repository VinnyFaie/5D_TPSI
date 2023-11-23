import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibiComponent } from './cibi.component';

describe('CibiComponent', () => {
  let component: CibiComponent;
  let fixture: ComponentFixture<CibiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CibiComponent]
    });
    fixture = TestBed.createComponent(CibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
