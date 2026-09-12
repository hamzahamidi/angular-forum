import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { FavoriteButtonComponent } from './favorite-button.component';
import { FollowButtonComponent } from './follow-button.component';
import { Article, ArticlesService, Profile, ProfilesService, UserService } from '../../core';

const stub = <T>(value: Partial<T> = {}) => value as T;

function routerRecorder() {
  const navigations: string[] = [];
  const router = { navigateByUrl: (url: unknown) => { navigations.push(String(url)); return Promise.resolve(true); } };

  return { navigations, router: router as unknown as Router };
}

function articleFixture(favorited: boolean): Article {
  return {
    slug: 'a-slug',
    title: 'Title',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited,
    favoritesCount: favorited ? 1 : 0,
    author: { username: 'author', bio: '', image: '', following: false }
  };
}

describe('FavoriteButtonComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  function create(options: { authenticated: boolean; favorited: boolean; response?: Observable<Article> }) {
    const calls: string[] = [];
    const { navigations, router } = routerRecorder();

    TestBed.configureTestingModule({
      providers: [
        FavoriteButtonComponent,
        { provide: Router, useValue: router },
        { provide: UserService, useValue: { isAuthenticated: of(options.authenticated) } },
        {
          provide: ArticlesService,
          useValue: stub<ArticlesService>({
            favorite: slug => { calls.push(`favorite:${slug}`); return options.response ?? of(articleFixture(true)); },
            unfavorite: slug => { calls.push(`unfavorite:${slug}`); return options.response ?? of(articleFixture(false)); }
          })
        }
      ]
    });

    const component = TestBed.inject(FavoriteButtonComponent);
    component.article = articleFixture(options.favorited);

    const emitted: boolean[] = [];
    component.toggle.subscribe(value => emitted.push(value));

    return { component, calls, navigations, emitted };
  }

  it('favorites an article that is not favorited yet', () => {
    const { component, calls, emitted } = create({ authenticated: true, favorited: false });

    component.toggleFavorite();

    expect(calls).toEqual(['favorite:a-slug']);
    expect(emitted).toEqual([true]);
    expect(component.isSubmitting()).toBe(false);
  });

  it('unfavorites an article that is already favorited', () => {
    const { component, calls, emitted } = create({ authenticated: true, favorited: true });

    component.toggleFavorite();

    expect(calls).toEqual(['unfavorite:a-slug']);
    expect(emitted).toEqual([false]);
    expect(component.isSubmitting()).toBe(false);
  });

  it('sends an anonymous visitor to the login page without calling the API', () => {
    const { component, calls, navigations, emitted } = create({ authenticated: false, favorited: false });

    component.toggleFavorite();

    expect(navigations).toEqual(['/login']);
    expect(calls).toEqual([]);
    expect(emitted).toEqual([]);
  });
});

describe('FollowButtonComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  function create(options: { authenticated: boolean; following: boolean; response?: Observable<Profile> }) {
    const calls: string[] = [];
    const { navigations, router } = routerRecorder();
    const profile: Profile = { username: 'author', bio: '', image: '', following: options.following };

    TestBed.configureTestingModule({
      providers: [
        FollowButtonComponent,
        { provide: Router, useValue: router },
        { provide: UserService, useValue: { isAuthenticated: of(options.authenticated) } },
        {
          provide: ProfilesService,
          useValue: stub<ProfilesService>({
            follow: username => { calls.push(`follow:${username}`); return options.response ?? of(profile); },
            unfollow: username => { calls.push(`unfollow:${username}`); return options.response ?? of(profile); }
          })
        }
      ]
    });

    const component = TestBed.inject(FollowButtonComponent);
    component.profile = profile;

    const emitted: boolean[] = [];
    component.toggle.subscribe(value => emitted.push(value));

    return { component, calls, navigations, emitted };
  }

  it('follows a profile that is not followed yet', () => {
    const { component, calls, emitted } = create({ authenticated: true, following: false });

    component.toggleFollowing();

    expect(calls).toEqual(['follow:author']);
    expect(emitted).toEqual([true]);
    expect(component.isSubmitting()).toBe(false);
  });

  it('unfollows a profile that is already followed', () => {
    const { component, calls, emitted } = create({ authenticated: true, following: true });

    component.toggleFollowing();

    expect(calls).toEqual(['unfollow:author']);
    expect(emitted).toEqual([false]);
    expect(component.isSubmitting()).toBe(false);
  });

  it('sends an anonymous visitor to the login page without calling the API', () => {
    const { component, calls, navigations, emitted } = create({ authenticated: false, following: false });

    component.toggleFollowing();

    expect(navigations).toEqual(['/login']);
    expect(calls).toEqual([]);
    expect(emitted).toEqual([]);
  });
});
