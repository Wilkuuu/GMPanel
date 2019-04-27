import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerPanelComponent } from './add-player-panel.component';

describe('AddPlayerPanelComponent', () => {
  let component: AddPlayerPanelComponent;
  let fixture: ComponentFixture<AddPlayerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
