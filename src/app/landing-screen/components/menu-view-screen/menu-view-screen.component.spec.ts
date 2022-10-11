import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewScreenComponent } from './menu-view-screen.component';

describe('MenuViewScreenComponent', () => {
  let component: MenuViewScreenComponent;
  let fixture: ComponentFixture<MenuViewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuViewScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuViewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
