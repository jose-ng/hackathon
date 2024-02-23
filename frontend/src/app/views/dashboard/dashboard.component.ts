import { Component, OnInit } from '@angular/core';
import { HpApiService } from 'src/app/core/services/hp-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private _hpApiService: HpApiService) { }
  servicios: any = {}
  nextCall = 60;

  timer() {
    const intervall = setInterval(()=>{
      this.nextCall--;
      if (this.nextCall == 0) {
        clearInterval(intervall)
        this.getStatuses()
      }
    }, 1000)
  }


  ngOnInit(): void {
    this.getStatuses()
  }

  getStatuses() {
    this._hpApiService.getStatus().subscribe((data :any) => {
      this.servicios = data;
      this._hpApiService.history = data;
      this.nextCall = 60;
      this.timer()
    })
  }

}
