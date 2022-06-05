import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HTTPOPTIONS} from "../../../../shared/constant/http-options.constants";
import {SignupUser} from "../../model/signupUser.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  public isSubmitted = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _httpClient: HttpClient,
  ) {
    this.signUpForm = this._fb.group({});
  }

  ngOnInit(): void {
    this.setUpSignUpForm();
  }

  private setUpSignUpForm(): void {
    const emailReg = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const letters = /^[A-Za-z]+$/;

    this.signUpForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.pattern(letters)]],
      lastName: ['', [Validators.required, Validators.pattern(letters)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]], //to do , change min length after tests
      email: ['', [Validators.required, Validators.pattern(emailReg)]],
      phone: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onCreate(): void {
    this.isSubmitted = true;

    if (this.signUpForm.valid) {
      const formValue = JSON.stringify(this.signUpForm.value);

      const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/signupUsers'
      this._httpClient.post(url , formValue, HTTPOPTIONS).subscribe((response: SignupUser) => {
        this.signUpForm.reset();
        this._router.navigate(['account/login']);
      });
    }

  }


}
