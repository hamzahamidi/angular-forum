import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { UserService, ThemeService, FALLBACK_AVATAR } from '../../core';
import packageJson from '../../../../package.json';

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html',
    standalone: false
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    public themeService: ThemeService
  ) {}

  readonly currentUser = toSignal(
    this.userService.currentUser,
    { requireSync: true }
  );

  panelOpen = false;
  appVersion = packageJson.version;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
