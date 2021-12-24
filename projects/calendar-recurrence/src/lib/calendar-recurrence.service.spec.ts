import { TestBed } from '@angular/core/testing';

import { CalendarRecurrenceService } from './calendar-recurrence.service';

describe('CalendarRecurrenceService', () => {
  let service: CalendarRecurrenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarRecurrenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
