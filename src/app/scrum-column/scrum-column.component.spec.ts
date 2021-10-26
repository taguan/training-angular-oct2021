import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumColumnComponent } from './scrum-column.component';

describe('ScrumColumnComponent', () => {
  let component: ScrumColumnComponent;
  let fixture: ComponentFixture<ScrumColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
