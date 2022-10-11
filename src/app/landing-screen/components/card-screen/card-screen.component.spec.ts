import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScreenComponent } from './card-screen.component';

describe('CardScreenComponent', () => {
  let component: CardScreenComponent;
  let fixture: ComponentFixture<CardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
