import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqubeLibraryComponent } from './cqube-library.component';

describe('CqubeLibraryComponent', () => {
  let component: CqubeLibraryComponent;
  let fixture: ComponentFixture<CqubeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqubeLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CqubeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
