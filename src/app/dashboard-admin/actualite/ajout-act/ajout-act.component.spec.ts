import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActComponent } from './ajout-act.component';

describe('AjoutActComponent', () => {
  let component: AjoutActComponent;
  let fixture: ComponentFixture<AjoutActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
