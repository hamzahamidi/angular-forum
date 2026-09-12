import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';

function isSpam(article: Article): boolean {
  return article.title.toLowerCase().includes('checkpoint ledger');
}

@Injectable()
export class ArticlesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    const params: Record<string, string> = {};

    Object.entries(config.filters)
    .forEach(([key, value]) => {
      params[key] = String(value);
    });

    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    ).pipe(map(data => {
      const filtered = data.articles.filter((a: Article) => !isSpam(a));
      return { articles: filtered, articlesCount: filtered.length ? data.articlesCount : 0 };
    }));
  }

  get(slug: string): Observable<Article> {
    return this.apiService.get('/articles/' + slug)
      .pipe(map(data => data.article));
  }

  destroy(slug: string) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article: Article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }

  favorite(slug: string): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug: string): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }


}
