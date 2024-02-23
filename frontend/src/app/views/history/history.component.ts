import { Component, OnInit } from '@angular/core';
import { HpApiService } from 'src/app/core/services/hp-api.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    constructor(public hpApiService: HpApiService) { }

    ngOnInit(): void { }
}
