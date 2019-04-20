import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePanelComponent } from './dice-panel.component';

describe('DicePanelComponent', () => {
  let component: DicePanelComponent;
  let fixture: ComponentFixture<DicePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
