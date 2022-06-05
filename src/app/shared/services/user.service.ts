import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {UserModel} from "../../pages/authentication/model/user.model";

@Injectable()
export class UserService {
  private _loggedUserData: UserModel = null;
  private _loggedUserData$: BehaviorSubject<UserModel>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this._loggedUserData$ = new BehaviorSubject<UserModel>(this._loggedUserData);
  }

  public setCurrentUserInfo(userId: number): void {
    const url = 'https://my-json-server.typicode.com/Prakash2800/airdb/signupUsers'
    this._httpClient.get(url).subscribe((response:  UserModel[]) => {
      const userInfo = response.find((user: UserModel) => {
        return user.id === userId;
      });
      this._loggedUserData$.next(userInfo);
    });
  }

  public currentUserInfo(): Observable<UserModel> {
    return this._loggedUserData$.asObservable();
  }

}
