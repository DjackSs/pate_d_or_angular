import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCustomComponent } from './alert-custom.component';

describe('AlertCustomComponent', () => {
  let component: AlertCustomComponent;
  let fixture: ComponentFixture<AlertCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
