import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalemComponent } from './talem.component';

describe('TalemComponent', () => {
  let component: TalemComponent;
  let fixture: ComponentFixture<TalemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
