import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  title = 'Trops';
  tr_log_email: string = "";
  tr_log_pass: string = "";
  tr_reg_email: string = "";
  tr_reg_pass: string = "";
  tr_reg_conf_pass: string = "";
  username = '';
  password = '';
  invalidLogin = false;
  login(): void {
    if (this.authenticationService.authenticate(this.tr_log_email, this.tr_log_pass)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  register(): void {
  }
}
