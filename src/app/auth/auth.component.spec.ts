import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { AuthComponent } from './auth.component';
import { User, UserService } from '../core';

const stub = <T>(value: Partial<T> = {}) => value as T;

function create(options: { path: 'login' | 'register'; response?: Observable<User> }) {
  const navigations: string[] = [];
  const attempts: { type: string; credentials: unknown }[] = [];

  TestBed.configureTestingModule({
    providers: [
      AuthComponent,
      { provide: ActivatedRoute, useValue: { url: of([{ path: options.path }]) } },
      {
        provide: Router,
        useValue: { navigateByUrl: (url: unknown) => { navigations.push(String(url)); return Promise.resolve(true); } }
      },
      {
        provide: UserService,
        useValue: stub<UserService>({
          attemptAuth: (type, credentials) => {
            attempts.push({ type, credentials });
            return options.response ?? of({} as User);
          }
        })
      }
    ]
  });

  const component = TestBed.inject(AuthComponent);
  component.ngOnInit();

  return { component, navigations, attempts };
}

describe('AuthComponent', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('titles itself from the route and asks for two fields on login', () => {
    const { component } = create({ path: 'login' });

    expect(component.authType).toBe('login');
    expect(component.title).toBe('Sign in');
    expect(Object.keys(component.authForm.controls)).toEqual(['email', 'password']);
  });

  it('adds the username control on register', () => {
    const { component } = create({ path: 'register' });

    expect(component.title).toBe('Sign up');
    expect(Object.keys(component.authForm.controls)).toEqual(['email', 'password', 'username']);
  });

  it('sends the form to the service and goes home on success', () => {
    const { component, navigations, attempts } = create({ path: 'login' });
    component.authForm.setValue({ email: 'someone@example.com', password: 'secret' });

    component.submitForm();

    expect(attempts).toEqual([{ type: 'login', credentials: { email: 'someone@example.com', password: 'secret' } }]);
    expect(navigations).toEqual(['/']);
  });

  it('surfaces the errors and re-enables the form on failure', () => {
    const failure = { errors: { 'email or password': 'is invalid' } };
    const { component, navigations } = create({ path: 'login', response: throwError(() => failure) });

    component.submitForm();

    expect(component.errors()).toEqual(failure);
    expect(component.isSubmitting()).toBe(false);
    expect(navigations).toEqual([]);
  });
});
