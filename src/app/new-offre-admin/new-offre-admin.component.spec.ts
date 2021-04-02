import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOffreAdminComponent } from './new-offre-admin.component';

describe('NewOffreAdminComponent', () => {
  let component: NewOffreAdminComponent;
  let fixture: ComponentFixture<NewOffreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOffreAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOffreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
