import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './shared/components/test/test.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { historyComponent } from './views/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    TestComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    DashboardComponent,
    historyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
