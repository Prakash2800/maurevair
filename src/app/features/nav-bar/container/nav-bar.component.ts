import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  public isUserLoggedIn = false;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.verifyUserStatus();
  }

  private verifyUserStatus(): void {
    this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

}
