import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOffreComponent } from './navigation-offre.component';

describe('NavigationOffreComponent', () => {
  let component: NavigationOffreComponent;
  let fixture: ComponentFixture<NavigationOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
