import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaisonsComponent } from './liste-maisons.component';

describe('ListeMaisonsComponent', () => {
  let component: ListeMaisonsComponent;
  let fixture: ComponentFixture<ListeMaisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMaisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
