import { Component, OnInit, signal } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Errors, User, UserService } from '../core';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings.component.html',
    standalone: false
})
export class SettingsComponent implements OnInit {
  user: User = {} as User;
  settingsForm: UntypedFormGroup;
  readonly errors = signal<Errors>({ errors: {} });
  readonly isSubmitting = signal(false);

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) {
    // create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
    // Optional: subscribe to changes on the form
    // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    Object.assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting.set(true);

    // update the model
    this.updateUser(this.settingsForm.value);

    this.userService
    .update(this.user)
    .subscribe({
      next: updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username),
      error: err => {
        this.errors.set(err);
        this.isSubmitting.set(false);
      }
    });
  }

  updateUser(values: Object) {
    Object.assign(this.user, values);
  }

}
