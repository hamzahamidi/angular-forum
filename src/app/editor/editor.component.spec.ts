import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { EditorComponent } from './editor.component';
import { Article, ArticlesService } from '../core';

const stub = <T>(value: Partial<T> = {}) => value as T;

function articleFixture(): Article {
  return {
    slug: 'an-existing-article',
    title: 'A title',
    description: 'A description',
    body: 'A body',
    tagList: ['angular'],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: { username: 'author', bio: '', image: '', following: false }
  };
}

function create(options: { article?: Article; response?: Observable<Article> } = {}) {
  const navigations: string[] = [];
  const saved: Article[] = [];

  TestBed.configureTestingModule({
    providers: [
      EditorComponent,
      { provide: ActivatedRoute, useValue: { data: of(options.article ? { article: options.article } : {}) } },
      {
        provide: Router,
        useValue: { navigateByUrl: (url: unknown) => { navigations.push(String(url)); return Promise.resolve(true); } }
      },
      {
        provide: ArticlesService,
        useValue: stub<ArticlesService>({
          save: article => {
            saved.push(article);
            return options.response ?? of({ ...article, slug: article.slug || 'a-new-article' });
          }
        })
      }
    ]
  });

  const component = TestBed.inject(EditorComponent);
  component.ngOnInit();

  return { component, navigations, saved };
}

describe('EditorComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('starts empty when no article is prefetched', () => {
    const { component } = create();

    expect(component.articleForm.value).toEqual({ title: '', description: '', body: '' });
    expect(component.article.tagList).toEqual([]);
  });

  it('fills the form from a prefetched article', () => {
    const { component } = create({ article: articleFixture() });

    expect(component.articleForm.value).toEqual({
      title: 'A title',
      description: 'A description',
      body: 'A body'
    });
    expect(component.article.slug).toBe('an-existing-article');
  });

  it('adds a tag once and removes it again', () => {
    const { component } = create();

    component.tagField.setValue('angular');
    component.addTag();
    component.tagField.setValue('angular');
    component.addTag();

    expect(component.article.tagList).toEqual(['angular']);

    component.removeTag('angular');

    expect(component.article.tagList).toEqual([]);
  });

  it('creates an article and goes to it', () => {
    const { component, navigations, saved } = create();
    component.articleForm.setValue({ title: 'New', description: 'Desc', body: 'Body' });

    component.submitForm();

    expect(saved.length).toBe(1);
    expect(saved[0].title).toBe('New');
    expect(navigations).toEqual(['/article/a-new-article']);
  });

  it('updates an existing article under its own slug', () => {
    const { component, navigations, saved } = create({ article: articleFixture() });
    component.articleForm.patchValue({ title: 'An edited title' });

    component.submitForm();

    expect(saved[0].slug).toBe('an-existing-article');
    expect(saved[0].title).toBe('An edited title');
    expect(navigations).toEqual(['/article/an-existing-article']);
  });

  it('surfaces the errors and re-enables the form on failure', () => {
    const failure = { errors: { title: "can't be blank" } };
    const { component, navigations } = create({ response: throwError(() => failure) });

    component.submitForm();

    expect(component.errors()).toEqual(failure);
    expect(component.isSubmitting()).toBe(false);
    expect(navigations).toEqual([]);
  });
});
