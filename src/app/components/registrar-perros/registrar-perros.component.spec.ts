import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPerrosComponent } from './registrar-perros.component';

describe('RegistrarPerrosComponent', () => {
  let component: RegistrarPerrosComponent;
  let fixture: ComponentFixture<RegistrarPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
