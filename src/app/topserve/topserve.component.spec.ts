import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopserveComponent } from './topserve.component';

describe('TopserveComponent', () => {
  let component: TopserveComponent;
  let fixture: ComponentFixture<TopserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
