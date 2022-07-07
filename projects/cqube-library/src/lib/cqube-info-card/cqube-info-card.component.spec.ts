import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqubeInfoCardComponent } from './cqube-info-card.component';

describe('CqubeInfoCardComponent', () => {
  let component: CqubeInfoCardComponent;
  let fixture: ComponentFixture<CqubeInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqubeInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CqubeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
