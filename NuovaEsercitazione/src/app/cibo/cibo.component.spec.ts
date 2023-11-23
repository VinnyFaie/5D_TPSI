import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboComponent } from './cibo.component';

describe('CiboComponent', () => {
  let component: CiboComponent;
  let fixture: ComponentFixture<CiboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiboComponent]
    });
    fixture = TestBed.createComponent(CiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
