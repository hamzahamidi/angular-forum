import { Component, Input } from '@angular/core';

import { Article, FALLBACK_AVATAR } from '../../core';

@Component({
    selector: 'app-article-meta',
    templateUrl: './article-meta.component.html',
    standalone: false
})
export class ArticleMetaComponent {
  @Input() article: Article;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
