import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlissiereComponent } from './glissiere.component';

describe('GlissiereComponent', () => {
  let component: GlissiereComponent;
  let fixture: ComponentFixture<GlissiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlissiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlissiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
