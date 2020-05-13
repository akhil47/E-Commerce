import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrioBannersComponent } from './trio-banners.component';

describe('TrioBannersComponent', () => {
  let component: TrioBannersComponent;
  let fixture: ComponentFixture<TrioBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrioBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrioBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
