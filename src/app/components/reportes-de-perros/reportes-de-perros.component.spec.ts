import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDePerrosComponent } from './reportes-de-perros.component';

describe('ReportesDePerrosComponent', () => {
  let component: ReportesDePerrosComponent;
  let fixture: ComponentFixture<ReportesDePerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesDePerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesDePerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
