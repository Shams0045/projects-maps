import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search/search.component";
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
