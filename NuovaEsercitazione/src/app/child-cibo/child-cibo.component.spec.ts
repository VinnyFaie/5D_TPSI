import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCiboComponent } from './child-cibo.component';

describe('ChildCiboComponent', () => {
  let component: ChildCiboComponent;
  let fixture: ComponentFixture<ChildCiboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCiboComponent]
    });
    fixture = TestBed.createComponent(ChildCiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
