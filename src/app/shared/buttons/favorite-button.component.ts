import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Article, ArticlesService, UserService } from '../../core';
import { of } from 'rxjs';
import { concatMap ,  tap } from 'rxjs/operators';

@Component({
    selector: 'app-favorite-button',
    templateUrl: './favorite-button.component.html',
    standalone: false
})
export class FavoriteButtonComponent {
  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService
  ) {}

  @Input() article!: Article;
  @Output() toggle = new EventEmitter<boolean>();
  readonly isSubmitting = signal(false);

  toggleFavorite() {
    this.isSubmitting.set(true);

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        // Favorite the article if it isn't favorited yet
        if (!this.article.favorited) {
          return this.articlesService.favorite(this.article.slug)
          .pipe(tap(
            data => {
              this.isSubmitting.set(false);
              this.toggle.emit(true);
            },
            err => this.isSubmitting.set(false)
          ));

        // Otherwise, unfavorite the article
        } else {
          return this.articlesService.unfavorite(this.article.slug)
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
