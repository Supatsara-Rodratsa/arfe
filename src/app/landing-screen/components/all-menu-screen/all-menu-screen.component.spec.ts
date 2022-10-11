import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuScreenComponent } from './all-menu-screen.component';

describe('AllMenuScreenComponent', () => {
  let component: AllMenuScreenComponent;
  let fixture: ComponentFixture<AllMenuScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMenuScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMenuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
