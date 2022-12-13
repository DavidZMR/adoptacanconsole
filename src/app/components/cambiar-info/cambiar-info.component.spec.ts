import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarInfoComponent } from './cambiar-info.component';

describe('CambiarInfoComponent', () => {
  let component: CambiarInfoComponent;
  let fixture: ComponentFixture<CambiarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
