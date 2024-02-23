import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {

  }

}
