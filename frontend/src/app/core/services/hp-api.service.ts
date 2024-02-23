import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusModel } from 'src/app/shared/model/status.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HpApiService {
  constructor(private http: HttpClient) {}

  getStatus() {
    return this.http.get<{ words: StatusModel[]; hora_consulta: string }>(
      `${environment.API_URL}/status`,
    );
  }
}
