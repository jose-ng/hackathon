import { Component, OnInit } from '@angular/core';
import { HpApiService } from 'src/app/core/services/hp-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private _hpApiService: HpApiService) { }
  servicios = {
    "horaConsulta": "23/02/2024 12:34:23",
    "servicios": [
      {
        "nombre": "Personajes",
        "status": "nok",
        "codigo": 500
      },
      {
        "nombre": "Personajes por ID",
        "status": "ok",
        "codigo": 200
      },
      {
        "nombre": "Estudiantes de Hogwarts",
        "status": "ok",
        "codigo": 200
      },
      {
        "nombre": "Personajes por casa",
        "status": "ok",
        "codigo": 200
      },
      {
        "nombre": "Todos los hechizos",
        "status": "ok",
        "codigo": 200
      }
    ]
  }


  ngOnInit(): void {
    this._hpApiService.getStatus().subscribe((data :any) => {
      this.servicios = data;
    })
  }

}
