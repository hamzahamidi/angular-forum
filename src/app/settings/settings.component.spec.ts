import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { SettingsComponent } from './settings.component';
import { User, UserService } from '../core';

const stub = <T>(value: Partial<T> = {}) => value as T;

function userFixture(): User {
  return { email: 'someone@example.com', token: 'a-token', username: 'someone', bio: 'A bio', image: 'an-image' };
}

function create(options: { response?: Observable<User> } = {}) {
  const navigations: string[] = [];
  const updates: User[] = [];
  let purged = false;

  TestBed.configureTestingModule({
    providers: [
      SettingsComponent,
      {
        provide: Router,
        useValue: { navigateByUrl: (url: unknown) => { navigations.push(String(url)); return Promise.resolve(true); } }
      },
      {
        provide: UserService,
        useValue: stub<UserService>({
          getCurrentUser: () => userFixture(),
          purgeAuth: () => { purged = true; },
          update: user => { updates.push(user); return options.response ?? of(user); }
        })
      }
    ]
  });

  const component = TestBed.inject(SettingsComponent);
  component.ngOnInit();

  return { component, navigations, updates, wasPurged: () => purged };
}

describe('SettingsComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('fills the form from the current user', () => {
    const { component } = create();

    expect(component.settingsForm.value).toEqual({
      image: 'an-image',
      username: 'someone',
      bio: 'A bio',
      email: 'someone@example.com',
      password: ''
    });
  });

  it('saves the edited values and goes to the profile on success', () => {
    const { component, navigations, updates } = create();
    component.settingsForm.patchValue({ bio: 'A new bio' });

    component.submitForm();

    expect(updates.length).toBe(1);
    expect(updates[0].bio).toBe('A new bio');
    expect(updates[0].token).toBe('a-token');
    expect(navigations).toEqual(['/profile/someone']);
  });

  it('surfaces the errors and re-enables the form on failure', () => {
    const failure = { errors: { email: 'is already taken' } };
    const { component, navigations } = create({ response: throwError(() => failure) });

    component.submitForm();

    expect(component.errors()).toEqual(failure);
    expect(component.isSubmitting()).toBe(false);
    expect(navigations).toEqual([]);
  });

  it('purges the session and goes home on logout', () => {
    const { component, navigations, wasPurged } = create();

    component.logout();

    expect(wasPurged()).toBe(true);
    expect(navigations).toEqual(['/']);
  });
});
