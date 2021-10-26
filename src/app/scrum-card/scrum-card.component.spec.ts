import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumCardComponent } from './scrum-card.component';

describe('ScrumCardComponent', () => {
  let component: ScrumCardComponent;
  let fixture: ComponentFixture<ScrumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
