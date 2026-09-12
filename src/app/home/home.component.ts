import { Component, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { ArticleListConfig, TagsService, UserService } from '../core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {}

  private readonly isAuthenticated = toSignal(
    this.userService.isAuthenticated,
    { initialValue: false }
  );

  readonly tags = this.tagsService.getAll();

  readonly listConfig = linkedSignal<boolean, ArticleListConfig>({
    source: this.isAuthenticated,
    computation: authenticated => ({
      type: authenticated ? 'feed' : 'all',
      filters: {}
    })
  });

  readonly selectedTab = linkedSignal<boolean, number>({
    source: this.isAuthenticated,
    computation: () => 0
  });

  onTabChange(event: any) {
    const label = event.tab.textLabel;
    if (label === 'Your Feed') {
      this.setListTo('feed');
    } else if (label === 'Global Feed') {
      this.setListTo('all');
    }
  }

  setListTo(type: string = '', filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.listConfig.set({ type: type, filters: filters });
    this.selectedTab.set(this.tabIndexFor(type, filters));
  }

  private tabIndexFor(type: string, filters: Object): number {
    if (!this.isAuthenticated()) {
      return Object.keys(filters).length ? 1 : 0;
    }

    if (type === 'feed' && !Object.keys(filters).length) {
      return 0;
    }

    if (type === 'all' && !Object.keys(filters).length) {
      return 1;
    }

    return 2;
  }
}
