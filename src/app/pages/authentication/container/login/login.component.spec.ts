import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from "./login.component";
import {AuthService} from "../../../../features/authentication/auth.service";
import {UserService} from "../../../../shared/services/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

class Page {
  get submitButton() {
    return this.fixture.nativeElement.querySelector('button');
  }

  get errorMsg() {
    return this.fixture.debugElement.query(By.css('.error')).nativeElement;
  }

  get errorMsgPwdLength() {
    return this.fixture.debugElement.query(By.css('.errorPswLength')).nativeElement;
  }

  constructor(private fixture: ComponentFixture<LoginComponent>) {}
}

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page: Page;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
          AuthService,
          UserService,
          HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    page = new Page(fixture);
    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('empty username', () => {
    let userName = loginComponent.loginForm.controls['userName'];
    expect(userName.value).toBe('');
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.isSubmitted).toBe(true);
    expect(page.errorMsg.textContent).toBe('Field required');
  });

  it('empty password', () => {
    let userPassword = loginComponent.loginForm.controls['password'];
    expect(userPassword.value).toBe('')
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.isSubmitted).toBe(true);
    expect(page.errorMsg.textContent).toBe('Field required');
  });

  it ('form invalid when empty', () => {
    expect(loginComponent.loginForm.valid).toBeFalsy();
  })

  it('password length', () => {
    let password = loginComponent.loginForm.controls['password'];
    password.setValue('333');
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.isSubmitted).toBe(true);
    expect(page.errorMsgPwdLength.textContent).toBe('Minimum 5 characters');
  });

  it('invalid username', () => {
    let userName = loginComponent.loginForm.controls['userName'];
    let errors = {};
    errors = userName.errors;
    expect(errors['required']).toBeTruthy();
  });

  it('invalid password', () => {
    let password = loginComponent.loginForm.controls['password'];
    let errors = {};
    errors = password.errors;
    expect(errors['required']).toBeTruthy();
  });

  it('Form validity', () => {
    let userName = loginComponent.loginForm.controls['userName'];
    let password = loginComponent.loginForm.controls['password'];
    userName.setValue('admin');
    password.setValue('admin');
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.loginForm.valid).toBeTruthy();
  });

});
