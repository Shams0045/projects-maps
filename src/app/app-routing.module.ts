import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./components/default/default.component";
import {DashboardComponent} from "./components/main/dashboard/dashboard.component";
import {ProjectsComponent} from "./components/main/projects/projects.component";

const routes: Routes = [{
  path: '', component: DefaultComponent,
  children: [
    { path: '', component: DashboardComponent},
    { path: 'projects', component: ProjectsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
