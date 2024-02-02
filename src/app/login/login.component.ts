import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "../../libs/services/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatIcon,
    MatMiniFabButton,
    MatToolbar
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private router: Router, private authService: AuthService) {}
  login() {
    this.router.navigate(["/dashboard"]);
  }

  getAuthService() : AuthService {
    return this.authService;
  }
}
