import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { ArticleComponent } from './article.component';
import { Article, ArticlesService, Comment, CommentsService, User, UserService } from '../core';

const stub = <T>(value: Partial<T> = {}) => value as T;

function articleFixture(): Article {
  return {
    slug: 'a-slug',
    title: 'Title',
    description: 'Description',
    body: 'Body',
    tagList: [],
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
    favorited: false,
    favoritesCount: 3,
    author: { username: 'author', bio: '', image: '', following: false }
  };
}

function createComponent(options: { article?: Article; comments?: Comment[]; added?: Comment; addFails?: unknown; destroyed?: number[] } = {}) {
  const article = options.article ?? articleFixture();

  TestBed.configureTestingModule({
    providers: [
      ArticleComponent,
      { provide: ActivatedRoute, useValue: { data: of({ article }) } },
      { provide: ArticlesService, useValue: stub<ArticlesService>() },
      { provide: Router, useValue: stub<Router>() },
      { provide: UserService, useValue: { currentUser: of({} as User) } },
      {
        provide: CommentsService,
        useValue: stub<CommentsService>({
          getAll: () => of(options.comments ?? []),
          add: () => options.addFails
            ? throwError(() => options.addFails)
            : of(options.added ?? stub<Comment>({ id: 2, body: 'new' })),
          destroy: (commentId: number) => {
            options.destroyed?.push(commentId);
            return of({});
          }
        })
      }
    ]
  });

  return { component: TestBed.inject(ArticleComponent), article };
}

describe('ArticleComponent state updates', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('reads the resolved article from the route', () => {
    const { component, article } = createComponent();

    expect(component.article()).toBe(article);
  });

  it('replaces the article when a favorite is toggled', () => {
    const { component, article } = createComponent();

    component.onToggleFavorite(true);

    expect(component.article()).not.toBe(article);
    expect(component.article().favorited).toBe(true);
    expect(component.article().favoritesCount).toBe(4);
    expect(article.favoritesCount).toBe(3);
  });

  it('decrements the count when a favorite is removed', () => {
    const { component } = createComponent({ article: { ...articleFixture(), favorited: true } });

    component.onToggleFavorite(false);

    expect(component.article().favorited).toBe(false);
    expect(component.article().favoritesCount).toBe(2);
  });

  it('replaces the author when following is toggled', () => {
    const { component, article } = createComponent();

    component.onToggleFollowing(true);

    expect(component.article().author).not.toBe(article.author);
    expect(component.article().author.following).toBe(true);
    expect(article.author.following).toBe(false);
  });

  it('loads the comments of the resolved article', () => {
    const existing = stub<Comment>({ id: 1, body: 'existing' });
    const { component } = createComponent({ comments: [existing] });

    expect(component.comments()).toEqual([existing]);
  });

  it('puts an added comment at the front without touching the loaded array', () => {
    const existing = stub<Comment>({ id: 1, body: 'existing' });
    const added = stub<Comment>({ id: 2, body: 'new' });
    const loaded = [existing];
    const { component } = createComponent({ comments: loaded, added });

    component.addComment();

    expect(component.comments()).toEqual([added, existing]);
    expect(loaded).toEqual([existing]);
    expect(component.isSubmitting()).toBe(false);
  });
  it('surfaces the errors and re-enables the form when a comment fails to post', () => {
    const failure = { errors: { body: "can't be blank" } };
    const { component } = createComponent({ addFails: failure });

    component.addComment();

    expect(component.commentFormErrors()).toEqual(failure);
    expect(component.isSubmitting()).toBe(false);
    expect(component.comments()).toEqual([]);
  });

  it('drops a deleted comment and leaves the others alone', () => {
    const kept = stub<Comment>({ id: 1, body: 'kept' });
    const doomed = stub<Comment>({ id: 2, body: 'doomed' });
    const destroyed: number[] = [];
    const { component } = createComponent({ comments: [kept, doomed], destroyed });

    component.onDeleteComment(doomed);

    expect(destroyed).toEqual([2]);
    expect(component.comments()).toEqual([kept]);
  });
});
