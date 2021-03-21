import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MessagesService, UserService } from '../core';
import { catchError } from 'rxjs/operators';
import { Message } from '../core/models/message.model';

@Injectable()
export class MessageResolver implements Resolve<Message> {
  constructor(private messagesService: MessagesService, private router: Router, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.messagesService.get(route.params['slug']).pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
