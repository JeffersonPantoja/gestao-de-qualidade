import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from 'src/app/auth/auth.guard';
import { Message } from 'src/app/share/enum/message.enum';
import { Login } from 'src/app/share/interface/login.interface';
import { ToastService } from 'src/app/share/service/toast/toast.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public submitedCalled: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
    private auth: AuthGuard,
    private router: Router
  ) {
    this.submitedCalled = false;
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  public enter(): void {
    this.submitedCalled = true;
    if (this.loginForm.valid) {
      this.loginService.enter(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((login: Login) => {
        this.toastService.showSuccess.next(Message.LOGIN_SUCCESS);
        this.auth.saveToken(login);
        this.auth.isAutenticated.next(true);
        this.router.navigate(['/home']);
      });

    }
  }

}
