import { Component, Input } from '@angular/core';

import { Article } from '../../core';

@Component({
    selector: 'app-article-preview',
    templateUrl: './article-preview.component.html',
    standalone: false
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  onToggleFavorite(favorited: boolean) {
    this.article = {
      ...this.article,
      favorited,
      favoritesCount: this.article.favoritesCount + (favorited ? 1 : -1)
    };
  }
}
