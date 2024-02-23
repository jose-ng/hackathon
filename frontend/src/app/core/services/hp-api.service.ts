import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StatusModel, statusDTO } from 'src/app/shared/models/status.model';
import { environment } from 'src/environments/environment';
import data  from '../../shared/models/servicios.json';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  constructor(private http: HttpClient) {}

  getStatus() {
    if (!environment.sendMock) {
      return this.http.get<statusDTO>(
        `${environment.API_URL}/status`
      );
    } else{
      return of<statusDTO>(data);
    }
  }
}
