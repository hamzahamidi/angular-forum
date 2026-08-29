import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../core';
import { take } from 'rxjs/operators';

@Injectable()
export class HomeAuthResolver  {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.userService.isAuthenticated.pipe(take(1));

  }
}
