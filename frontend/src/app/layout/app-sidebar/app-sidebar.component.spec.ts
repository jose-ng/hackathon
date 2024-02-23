import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarComponent } from './app-sidebar.component';

describe('AppSidebarComponent', () => {
  let component: AppSidebarComponent;
  let fixture: ComponentFixture<AppSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list with 2 links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(2);
  });

  it('should have a link to the dashboard', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].textContent).toContain('Dashboard');
  });

  it('should have a link to the History', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[1].textContent).toContain('History');
  });
});
