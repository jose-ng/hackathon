import { TestBed } from '@angular/core/testing';
import { HistoryComponent } from './HistoryComponent';

describe('HistoryComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HistoryComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(HistoryComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
