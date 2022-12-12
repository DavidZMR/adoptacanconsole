import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesDePerrerasComponent } from './solicitudes-de-perreras.component';

describe('SolicitudesDePerrerasComponent', () => {
  let component: SolicitudesDePerrerasComponent;
  let fixture: ComponentFixture<SolicitudesDePerrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesDePerrerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesDePerrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
