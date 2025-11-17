import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoTabla } from './hijo-tabla';

describe('HijoTabla', () => {
  let component: HijoTabla;
  let fixture: ComponentFixture<HijoTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
