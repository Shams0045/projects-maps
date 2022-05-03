import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../main/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {ProjectsComponent} from "../main/projects/projects.component";
import {SharedModule} from "../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule {
}
