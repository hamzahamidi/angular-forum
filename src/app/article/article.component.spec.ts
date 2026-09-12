import { of } from 'rxjs';

import { ArticleComponent } from './article.component';
import { Article, Comment, CommentsService } from '../core';

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

function createComponent(commentsService: CommentsService = stub<CommentsService>()) {
  return new ArticleComponent(stub(), stub(), commentsService, stub(), stub());
}

describe('ArticleComponent state updates', () => {
  it('replaces the article when a favorite is toggled', () => {
    const component = createComponent();
    const original = articleFixture();
    component.article = original;

    component.onToggleFavorite(true);

    expect(component.article).not.toBe(original);
    expect(component.article.favorited).toBe(true);
    expect(component.article.favoritesCount).toBe(4);
    expect(original.favoritesCount).toBe(3);
  });

  it('decrements the count when a favorite is removed', () => {
    const component = createComponent();
    component.article = { ...articleFixture(), favorited: true };

    component.onToggleFavorite(false);

    expect(component.article.favorited).toBe(false);
    expect(component.article.favoritesCount).toBe(2);
  });

  it('replaces the author when following is toggled', () => {
    const component = createComponent();
    const original = articleFixture();
    component.article = original;

    component.onToggleFollowing(true);

    expect(component.article).not.toBe(original);
    expect(component.article.author).not.toBe(original.author);
    expect(component.article.author.following).toBe(true);
    expect(original.author.following).toBe(false);
  });

  it('replaces the comment array when a comment is added', () => {
    const added = stub<Comment>({ id: 2, body: 'new' });
    const component = createComponent(stub<CommentsService>({ add: () => of(added) }));
    const existing = stub<Comment>({ id: 1, body: 'existing' });
    const original = [existing];
    component.article = articleFixture();
    component.comments = original;

    component.addComment();

    expect(component.comments).not.toBe(original);
    expect(component.comments).toEqual([added, existing]);
    expect(original).toEqual([existing]);
  });
});
