import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFilhoComponent } from './dados-filho.component';

describe('DadosFilhoComponent', () => {
  let component: DadosFilhoComponent;
  let fixture: ComponentFixture<DadosFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
