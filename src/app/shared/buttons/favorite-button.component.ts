import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Message, MessagesService, UserService } from '../../core';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
})
export class FavoriteButtonComponent {
  constructor(private messagesService: MessagesService, private router: Router, private userService: UserService) {}

  @Input() message: Message;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        concatMap((authenticated) => {
          // Not authenticated? Push to login screen
          if (!authenticated) {
            this.router.navigateByUrl('/login');
            return of(null);
          }

          // Favorite the message if it isn't favorited yet
          if (!this.message.favorited) {
            return this.messagesService.favorite(this.message.slug).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.toggle.emit(true);
                },
                (err) => (this.isSubmitting = false)
              )
            );

            // Otherwise, unfavorite the message
          } else {
            return this.messagesService.unfavorite(this.message.slug).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.toggle.emit(false);
                },
                (err) => (this.isSubmitting = false)
              )
            );
          }
        })
      )
      .subscribe();
  }
}
