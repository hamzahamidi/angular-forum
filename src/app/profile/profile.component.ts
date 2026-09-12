import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, UserService, Profile, FALLBACK_AVATAR } from '../core';
import { concatMap ,  tap } from 'rxjs/operators';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  profile!: Profile;
  currentUser!: User;
  isUser!: boolean;

  ngOnInit() {
    this.route.data.pipe(
      concatMap(data => {
        this.profile = data['profile'] as Profile;
        // Load the current user's data.
        return this.userService.currentUser.pipe(tap(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        ));
      })
    ).subscribe();
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
