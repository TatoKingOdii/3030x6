import { Component } from '@angular/core';
import {ListComponent} from "../list/list.component";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ContentService} from "../../libs/services/content-service/content.service";
import {DetailComponent} from "../detail/detail.component";
import {AuthService} from "../../libs/services/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ListComponent,
    MatButton,
    MatIcon,
    MatMiniFabButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    DetailComponent,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private contentService: ContentService,
              private authService: AuthService) {}

  getContentService() : ContentService {
    return this.contentService;
  }

  getAuthService() : AuthService {
    return this.authService;
  }
}
