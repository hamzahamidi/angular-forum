import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { ArticleListConfig, Profile } from '../core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-profile-articles',
    templateUrl: './profile-articles.component.html',
    standalone: false
})
export class ProfileArticlesComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  readonly articlesConfig: Observable<ArticleListConfig> = (this.route.parent?.data ?? EMPTY).pipe(
    map(data => ({
      type: 'all',
      filters: { author: (data['profile'] as Profile).username }
    }))
  );
}
