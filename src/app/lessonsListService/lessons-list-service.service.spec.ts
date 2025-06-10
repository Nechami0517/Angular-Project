import { TestBed } from '@angular/core/testing';

import { LessonListServiceService } from './lessons-list-service.service';

describe('LessonListServiceService', () => {
  let service: LessonListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
