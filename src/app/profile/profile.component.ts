import { Component, computed, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { UserService, Profile, FALLBACK_AVATAR } from '../core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile.component.html',
    standalone: false
})
export class ProfileComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  private readonly resolvedProfile = toSignal(
    this.route.data.pipe(map(data => data['profile'] as Profile)),
    { requireSync: true }
  );

  private readonly currentUser = toSignal(
    this.userService.currentUser,
    { requireSync: true }
  );

  readonly profile = linkedSignal(() => this.resolvedProfile());
  readonly isUser = computed(() => this.currentUser().username === this.profile().username);

  onToggleFollowing(following: boolean) {
    this.profile.update(profile => ({ ...profile, following }));
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
