import { ArticlePreviewComponent } from './article-preview.component';
import { Article } from '../../core';

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
    favoritesCount: 1,
    author: { username: 'author', bio: '', image: '', following: false }
  };
}

describe('ArticlePreviewComponent state updates', () => {
  it('replaces the article rather than writing through the input', () => {
    const component = new ArticlePreviewComponent();
    const original = articleFixture();
    component.article = original;

    component.onToggleFavorite(true);

    expect(component.article).not.toBe(original);
    expect(component.article.favoritesCount).toBe(2);
    expect(original.favoritesCount).toBe(1);
    expect(original.favorited).toBe(false);
  });

  it('decrements the count when a favorite is removed', () => {
    const component = new ArticlePreviewComponent();
    component.article = { ...articleFixture(), favorited: true, favoritesCount: 2 };

    component.onToggleFavorite(false);

    expect(component.article.favorited).toBe(false);
    expect(component.article.favoritesCount).toBe(1);
  });
});
