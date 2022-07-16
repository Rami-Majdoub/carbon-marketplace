import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorFormComponent } from './auditor-form.component';

describe('AuditorFormComponent', () => {
  let component: AuditorFormComponent;
  let fixture: ComponentFixture<AuditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
