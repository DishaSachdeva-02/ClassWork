import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsdetailsComponent } from './gadgetsdetails.component';

describe('GadgetsdetailsComponent', () => {
  let component: GadgetsdetailsComponent;
  let fixture: ComponentFixture<GadgetsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadgetsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GadgetsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
