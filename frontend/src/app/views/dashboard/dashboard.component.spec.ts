import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HpApiService } from 'src/app/core/services/hp-api.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [HpApiService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with tree headers: Nombre del servicio mágico, Estatusm and Código', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
    const headers = table.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('Nombre del servicio mágico');
    expect(headers[1].textContent).toContain('Estatus');
    expect(headers[2].textContent).toContain('Código');
  });

  it('should have a list of rows into tbody', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');

    expect(tbody).toBeTruthy();
    expect(rows.length).toBeGreaterThan(0);
  });
});
