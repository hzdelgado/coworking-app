// src/app/core/services/api.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch data from API', () => {
    service.get('spaces').subscribe((data) => {
      expect(data).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.example.com/spaces');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
