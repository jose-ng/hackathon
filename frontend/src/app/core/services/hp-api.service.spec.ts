import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HpApiService } from './hp-api.service';

fdescribe('HpApiService', () => {
  let hpService: HpApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HpApiService],
    });
    hpService = TestBed.inject(HpApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(hpService).toBeTruthy();
  });
});
