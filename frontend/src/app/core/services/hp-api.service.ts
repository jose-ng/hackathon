import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StatusModel } from 'src/app/shared/model/status.model';
import { environment } from 'src/environments/environment';
import data  from '../../shared/models/servicios.json';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  constructor(private http: HttpClient) {}

  getStatus() {
    if (!environment.sendMock) {
      return this.http.get<{ servicios: StatusModel[]; hora_consulta: string }>(
        `${environment.API_URL}/status`
      );
    } else{
      console.log(data)
      return of<{ servicios: StatusModel[]; hora_consulta: string }>(data);
    }
  }
}
