import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StatusModel } from 'src/app/shared/model/status.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  constructor(private http: HttpClient) {}

  getStatus() {
    if (!environment.sendMock) {
      return this.http.get<{ words: StatusModel[]; hora_consulta: string }>(
        `${environment.API_URL}/status`
      );
    } else
      return of({
        horaConsulta: '23/02/2024 12:34:23',
        servicios: [
          {
            nombre: 'Personajes',
            status: 'nok',
            codigo: 500,
          },
          {
            nombre: 'Personajes por ID',
            status: 'ok',
            codigo: 200,
          },
          {
            nombre: 'Estudiantes de Hogwarts',
            status: 'ok',
            codigo: 200,
          },
          {
            nombre: 'Personajes por casa',
            status: 'ok',
            codigo: 200,
          },
          {
            nombre: 'Todos los hechizos',
            status: 'ok',
            codigo: 200,
          },
        ],
      });
  }
}
