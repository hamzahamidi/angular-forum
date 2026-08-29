import { Component, OnInit } from '@angular/core';

import { User, UserService, ThemeService } from '../../core';
import packageJson from '../../../../package.json';

const FALLBACK_AVATAR = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" fill="%23bdbdbd"/><circle cx="64" cy="48" r="24" fill="%23fff"/><ellipse cx="64" cy="112" rx="40" ry="32" fill="%23fff"/></svg>');

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    public themeService: ThemeService
  ) {}

  currentUser!: User;
  panelOpen = false;
  appVersion = packageJson.version;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
