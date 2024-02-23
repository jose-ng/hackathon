import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { statusDTO } from 'src/app/shared/models/status.model';
import { environment } from 'src/environments/environment';
import data  from '../../shared/models/servicios.json';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  constructor(private http: HttpClient) {}

  /**
   * Return Status server
   *
   * @return {statusDTO}
   * @memberof HpApiService
   */
  getStatus() {
    if (!environment.sendMock) {
      return this.http.get<statusDTO>(
        `${environment.API_URL}/status`
      );
    } else{
      // When Server is not working
      return of<statusDTO>(data);
    }
  }
}
