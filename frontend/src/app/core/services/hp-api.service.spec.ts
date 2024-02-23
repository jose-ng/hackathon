import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HpApiService } from './hp-api.service';

describe('HpApiService', () => {
  let service: HpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpApiService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getStatus method', () => {
    expect(service.getStatus).toBeDefined();
  });

  it('should return a status object', () => {
    service.getStatus().subscribe((data) => {
      expect(data).toBeDefined();
      expect(data.servicios).toBeDefined();
      expect(data.hora_consulta).toBeDefined();
    });
  });

  it('should return a status object with the same properties as the mock', () => {
    service.getStatus().subscribe((data) => {
      expect(data.hora_consulta).toBe('23/02/2024 12:34:23');
      expect(data.servicios[0].nombre).toBe('Personajes');
      expect(data.servicios[0].status).toBe('nok');
      expect(data.servicios[0].codigo).toBe(500);
    });
  });
});
