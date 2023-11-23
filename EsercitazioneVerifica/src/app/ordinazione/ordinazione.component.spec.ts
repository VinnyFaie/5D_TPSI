import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinazioneComponent } from './ordinazione.component';

describe('OrdinazioneComponent', () => {
  let component: OrdinazioneComponent;
  let fixture: ComponentFixture<OrdinazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinazioneComponent]
    });
    fixture = TestBed.createComponent(OrdinazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
