import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsOffresComponent } from './stats-offres.component';

describe('StatsOffresComponent', () => {
  let component: StatsOffresComponent;
  let fixture: ComponentFixture<StatsOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
