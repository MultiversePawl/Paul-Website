import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalemPicturesComponent } from './talem-pictures.component';

describe('TalemPicturesComponent', () => {
  let component: TalemPicturesComponent;
  let fixture: ComponentFixture<TalemPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalemPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalemPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
