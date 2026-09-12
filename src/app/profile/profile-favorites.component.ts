import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleListConfig, Profile } from '../core';

@Component({
    selector: 'app-profile-favorites',
    templateUrl: './profile-favorites.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileFavoritesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile!: Profile;
  favoritesConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent?.data.subscribe(
      data => {
        this.profile = data['profile'] as Profile;
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );
  }

}
