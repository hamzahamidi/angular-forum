import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { ArticleListConfig, Profile } from '../core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-profile-favorites',
    templateUrl: './profile-favorites.component.html',
    standalone: false
})
export class ProfileFavoritesComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  readonly favoritesConfig: Observable<ArticleListConfig> = (this.route.parent?.data ?? EMPTY).pipe(
    map(data => ({
      type: 'all',
      filters: { favorited: (data['profile'] as Profile).username }
    }))
  );
}
