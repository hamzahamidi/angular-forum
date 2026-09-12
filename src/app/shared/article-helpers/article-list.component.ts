import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';

import { Article, ArticleListConfig, ArticlesService } from '../../core';

interface ArticleListRequest {
  config: ArticleListConfig;
  page: number;
}

interface ArticleListView {
  loading: boolean;
  currentPage: number;
  results: Article[];
  totalPages: number[];
}

@Component({
    selector: 'app-article-list',
    styleUrls: ['article-list.component.css'],
    templateUrl: './article-list.component.html',
    standalone: false
})
export class ArticleListComponent {
  constructor (
    private articlesService: ArticlesService
  ) {}

  @Input() limit!: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.request.next({ config, page: 1 });
    }
  }

  private readonly request = new BehaviorSubject<ArticleListRequest | null>(null);

  readonly view: Observable<ArticleListView> = this.request.pipe(
    filter((request): request is ArticleListRequest => request !== null),
    switchMap(request => this.load(request))
  );

  setPageTo(pageNumber: number) {
    const current = this.request.value;

    if (current) {
      this.request.next({ ...current, page: pageNumber });
    }
  }

  private load({ config, page }: ArticleListRequest): Observable<ArticleListView> {
    const filters = this.limit
      ? { ...config.filters, limit: this.limit, offset: this.limit * (page - 1) }
      : config.filters;

    return this.articlesService.query({ ...config, filters }).pipe(
      map(data => ({
        loading: false,
        currentPage: page,
        results: data.articles,
        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        totalPages: Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1)
      })),
      startWith({ loading: true, currentPage: page, results: [] as Article[], totalPages: [] as number[] })
    );
  }
}
