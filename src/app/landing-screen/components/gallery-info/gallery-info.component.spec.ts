import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryInfoComponent } from './gallery-info.component';

describe('GalleryInfoComponent', () => {
  let component: GalleryInfoComponent;
  let fixture: ComponentFixture<GalleryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
