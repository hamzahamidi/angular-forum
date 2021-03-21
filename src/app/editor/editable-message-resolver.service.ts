import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Message, MessagesService, UserService } from '../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EditableMessageResolver implements Resolve<Message> {
  constructor(private messagesService: MessagesService, private router: Router, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.messagesService.get(route.params['slug']).pipe(
      map((message) => {
        if (this.userService.getCurrentUser().username === message.author.username) {
          return message;
        } else {
          this.router.navigateByUrl('/');
        }
      }),
      catchError((err) => this.router.navigateByUrl('/'))
    );
  }
}
