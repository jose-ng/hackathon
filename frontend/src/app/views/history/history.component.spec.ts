import { ComponentFixture, TestBed } from '@angular/core/testing';
import { historyComponent } from './history.component';
import { By } from '@angular/platform-browser';

describe('historyComponent', () => {
  let component: historyComponent;
  let fixture: ComponentFixture<historyComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [historyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(historyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    const title = 'Historial';
    const titleElement = fixture.debugElement.query(
      By.css('.history__component__header')
    ).nativeElement.textContent;
    expect(titleElement).toContain(title);
  });
});
