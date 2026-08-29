import { Component, Input } from '@angular/core';

import { Article } from '../../core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent {
  @Input() article: Article;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" fill="#bdbdbd"/><circle cx="64" cy="48" r="24" fill="#fff"/><ellipse cx="64" cy="112" rx="40" ry="32" fill="#fff"/></svg>');
  }
}
