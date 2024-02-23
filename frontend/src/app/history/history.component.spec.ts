import { TestBed } from '@angular/core/testing';
import { historyComponent } from './history.component';

describe('historyComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                historyComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(historyComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
