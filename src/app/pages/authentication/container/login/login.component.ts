import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {AuthService} from "../../../../features/authentication/auth.service";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted = false;
  public noProfileFound = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _userService: UserService
  ) {
    this.loginForm = this._fb.group({});
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  public onLogin(): void {
    this.isSubmitted = true;
    if(this.loginForm.valid) {
      this._httpClient.get('/api/signupUsers').subscribe((response: UserModel[]) => {
        const userExist = response.find((user: UserModel) => {
          return user.userName === this.loginForm.value.userName && user.password === this.loginForm.value.password;
        });
        if (userExist) {
          this.loginForm.reset();
          this._router.navigate(['flights']);
          this._authService.logUserStatus(true);
          this._userService.setCurrentUserInfo(userExist.id)
          this.initiateEvent(userExist.id);
        } else {
          this.noProfileFound = true;
        }
      })
    }

  }

  private initiateEvent(id: number): void {
    localStorage.setItem('token', id.toString());
  }

  private setUpLoginForm(): void {
    this.loginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
}
