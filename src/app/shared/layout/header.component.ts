import { Component, OnInit } from '@angular/core';

import { User, UserService, ThemeService } from '../../core';
import packageJson from '../../../../package.json';

const FALLBACK_AVATAR = 'https://api.realworld.io/images/smiley-cyrus.jpeg';

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
