import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { LoginService } from './login.service';
import { ToastService } from 'src/app/share/service/toast/toast.service';
import { Message } from 'src/app/share/enum/message.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;

  public submitedCalled: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService
  ) { 
    this.submitedCalled = false;
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
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
      .subscribe((token: String) => {
        this.toastService.showSuccess.next(Message.LOGIN_SUCCESS);
      });

    }
  }

}
