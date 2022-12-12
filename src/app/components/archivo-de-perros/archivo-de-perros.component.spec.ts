import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoDePerrosComponent } from './archivo-de-perros.component';

describe('ArchivoDePerrosComponent', () => {
  let component: ArchivoDePerrosComponent;
  let fixture: ComponentFixture<ArchivoDePerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivoDePerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivoDePerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
