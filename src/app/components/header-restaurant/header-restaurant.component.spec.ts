import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRestaurantComponent } from './header-restaurant.component';

describe('HeaderRestaurantComponent', () => {
  let component: HeaderRestaurantComponent;
  let fixture: ComponentFixture<HeaderRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
