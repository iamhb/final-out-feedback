import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdbkpageComponent } from './fdbkpage.component';

describe('FdbkpageComponent', () => {
  let component: FdbkpageComponent;
  let fixture: ComponentFixture<FdbkpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdbkpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdbkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
