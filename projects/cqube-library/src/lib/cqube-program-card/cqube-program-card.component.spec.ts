import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqubeProgramCardComponent } from './cqube-program-card.component';

describe('CqubeProgramCardComponent', () => {
  let component: CqubeProgramCardComponent;
  let fixture: ComponentFixture<CqubeProgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqubeProgramCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CqubeProgramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
