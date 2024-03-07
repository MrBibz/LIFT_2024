import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbineBoardComponent } from './turbine-board.component';

describe('TurbineBoardComponent', () => {
  let component: TurbineBoardComponent;
  let fixture: ComponentFixture<TurbineBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurbineBoardComponent]
    });
    fixture = TestBed.createComponent(TurbineBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
