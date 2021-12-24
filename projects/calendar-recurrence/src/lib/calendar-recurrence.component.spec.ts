import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRecurrenceComponent } from './calendar-recurrence.component';

describe('CalendarRecurrenceComponent', () => {
  let component: CalendarRecurrenceComponent;
  let fixture: ComponentFixture<CalendarRecurrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarRecurrenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRecurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
