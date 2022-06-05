import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {Router} from "@angular/router";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../features/authentication/auth.service";
import {UserService} from "../../../../shared/services/user.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

class Page {
  get submitButton() {
    return this.fixture.nativeElement.querySelector('button');
  }

  get errorMsg() {
    return this.fixture.debugElement.query(By.css('.error')).nativeElement;
  }

  constructor(private fixture: ComponentFixture<LoginComponent>) {}
}

describe('LoginComponent', () => {

  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;

  let routerSpy: { navigate: jasmine.Spy };
  let router: Router;
  let page: Page;

  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  let authService: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj(Router, ['navigate']);
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: HttpClient, useValue: HttpClient },
        { provide: AuthService, useValue: AuthService },
        { provide: UserService, useValue: UserService },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    debugEl = fixture.debugElement;
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    page = new Page(fixture);
    fixture.detectChanges();

  });

  afterEach(() => {
    httpController.verify();
  });

  it('is created', () => {
    expect(loginComponent).toBeDefined();
  });

  it('empty username', () => {
    let userName = loginComponent.loginForm.controls['userName'];
    expect(userName.value).toBe('')
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.isSubmitted).toBe(true);
    expect(page.errorMsg.textContent).toBe('Field required');
  });

  it('empty password', () => {
    let userName = loginComponent.loginForm.controls['password'];
    expect(userName.value).toBe('')
    page.submitButton.click();
    fixture.detectChanges();
    expect(loginComponent.isSubmitted).toBe(true);
    expect(page.errorMsg.textContent).toBe('Field required');
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
    userName.setValue('prakash');
    password.setValue('prakash');
    page.submitButton.click();
    expect(loginComponent.loginForm.valid).toBeTruthy();
  });

});
