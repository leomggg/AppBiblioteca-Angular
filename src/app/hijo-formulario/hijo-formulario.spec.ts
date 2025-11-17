import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoFormulario } from './hijo-formulario';

describe('HijoFormulario', () => {
  let component: HijoFormulario;
  let fixture: ComponentFixture<HijoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
