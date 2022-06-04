import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {UserModel} from "../../../pages/authentication/model/user.model";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public userAbbr = '';
  public userFullName = '';
  public isUserLoggedIn = false;

  private currentUserInfoSubs: Subscription | undefined;
  private isUserLoggedInSubs: Subscription | undefined;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.verifyUserStatus();
    this.getUserInfo();
  }

  ngOnDestroy() {
    if(this.currentUserInfoSubs) this.currentUserInfoSubs.unsubscribe();
    if(this.isUserLoggedInSubs) this.isUserLoggedInSubs.unsubscribe();
  }

  public onLogout() {
    localStorage.removeItem('token');
    this._authService.logUserStatus(false);
    this._router.navigate(['account/login']);
  }

  private getUserInfo(): void {
    this._userService.currentUserInfo().subscribe((userInfo: UserModel) => {
      const firstName = userInfo?.firstName;
      const lastName = userInfo?.lastName;

      const firstNameLetter = firstName?.slice(0,1);
      const lastNameLetter = lastName?.slice(0,1);

      this.userAbbr = `${firstNameLetter}${lastNameLetter}`;
      this.userFullName = `${firstName} ${lastName}`;
    })
  }

  private verifyUserStatus(): void {
    this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

}
