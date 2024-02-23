import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StatusModel, statusDTO } from 'src/app/shared/models/status.model';
import { environment } from 'src/environments/environment';
import data from '../../shared/models/servicios.json';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  private _history: BehaviorSubject<Array<statusDTO>> = new BehaviorSubject<Array<statusDTO>>([]);

  history$: Observable<Array<statusDTO>> = this._history.asObservable();

  constructor(private http: HttpClient) { }

  set history(history: statusDTO) {
    const value = this._history.value;
    value.push(history);
    this._history.next(value);
  }

  getStatus() {
    if (!environment.sendMock) {
      return this.http.get<statusDTO>(
        `${environment.API_URL}/status`
      );
    } else {
      return of<statusDTO>(data);
    }
  }
}
