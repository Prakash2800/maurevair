import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AuthService} from "./features/authentication/auth.service";
import {UserService} from "./shared/services/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./features/header/header.module";
import {NavBarModule} from "./features/nav-bar/nav-bar.module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HeaderModule,
        NavBarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AuthService,
        UserService,
        HttpClient
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'maurevair'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('maurevair');
  });

});
