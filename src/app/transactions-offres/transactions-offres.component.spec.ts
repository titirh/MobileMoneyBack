import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOffresComponent } from './transactions-offres.component';

describe('TransactionsOffresComponent', () => {
  let component: TransactionsOffresComponent;
  let fixture: ComponentFixture<TransactionsOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
