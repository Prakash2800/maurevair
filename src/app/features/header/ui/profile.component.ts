import {Component, EventEmitter, Input, Output} from '@angular/core';
import {hideShow} from "../../../animations/animations";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  animations: [hideShow],
})
export class ProfileComponent {
  public profileInfo = false;
  @Input() userAbbr = '';
  @Input() userFullName = '';
  @Input() isUserLoggedIn = false;

  @Output() emitLogout: EventEmitter<void>;

  constructor(
  ) {
    this.emitLogout = new EventEmitter<void>();
  }

  public showProfileInfo(): void {
    this.profileInfo = !this.profileInfo;
  }

  public onLogout(): void {
    this.profileInfo = false;
    this.emitLogout.emit();
  }

}
