import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Profile, ProfilesService, UserService } from '../../core';
import { concatMap ,  tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-follow-button',
    templateUrl: './follow-button.component.html',
    standalone: false
})
export class FollowButtonComponent {
  constructor(
    private profilesService: ProfilesService,
    private router: Router,
    private userService: UserService
  ) {}

  @Input() profile!: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  readonly isSubmitting = signal(false);

  toggleFollowing() {
    this.isSubmitting.set(true);
    // TODO: remove nested subscribes, use mergeMap

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        // Follow this profile if we aren't already
        if (!this.profile.following) {
          return this.profilesService.follow(this.profile.username)
          .pipe(tap(
            data => {
              this.isSubmitting.set(false);
              this.toggle.emit(true);
            },
            err => this.isSubmitting.set(false)
          ));

        // Otherwise, unfollow this profile
        } else {
          return this.profilesService.unfollow(this.profile.username)
          .pipe(tap(
            data => {
              this.isSubmitting.set(false);
              this.toggle.emit(false);
            },
            err => this.isSubmitting.set(false)
          ));
        }
      }
    )).subscribe();
  }
}
