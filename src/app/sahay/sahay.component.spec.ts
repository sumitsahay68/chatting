import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahayComponent } from './sahay.component';

describe('SahayComponent', () => {
  let component: SahayComponent;
  let fixture: ComponentFixture<SahayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
