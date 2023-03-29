import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonneeComponent } from './coordonnee.component';

describe('CoordonneeComponent', () => {
  let component: CoordonneeComponent;
  let fixture: ComponentFixture<CoordonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
