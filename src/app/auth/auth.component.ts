import { Component, OnInit, signal } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService } from '../core';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth.component.html',
    standalone: false
})
export class AuthComponent implements OnInit {
  authType = '';
  title: String = '';
  readonly errors = signal<Errors>({ errors: {} });
  readonly isSubmitting = signal(false);
  authForm: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new UntypedFormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting.set(true);
    this.errors.set({ errors: {} });

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: err => {
        this.errors.set(err);
        this.isSubmitting.set(false);
      }
    });
  }
}
