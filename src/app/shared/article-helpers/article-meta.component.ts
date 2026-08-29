import { Component, Input } from '@angular/core';

import { Article } from '../../core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent {
  @Input() article: Article;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://api.realworld.io/images/smiley-cyrus.jpeg';
  }
}
