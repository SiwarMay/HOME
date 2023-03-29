import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActComponent } from './modifier-act.component';

describe('ModifierActComponent', () => {
  let component: ModifierActComponent;
  let fixture: ComponentFixture<ModifierActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
