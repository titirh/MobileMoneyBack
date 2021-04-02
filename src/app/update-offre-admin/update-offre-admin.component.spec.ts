import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffreAdminComponent } from './update-offre-admin.component';

describe('UpdateOffreAdminComponent', () => {
  let component: UpdateOffreAdminComponent;
  let fixture: ComponentFixture<UpdateOffreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOffreAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOffreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
