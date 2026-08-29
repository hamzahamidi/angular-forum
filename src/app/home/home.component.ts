import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, TagsService, UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {}

  isAuthenticated = false;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };
  tags: Array<string> = [];
  tagsLoaded = false;
  selectedTab = 0;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if (authenticated) {
          this.setListTo('feed');
          this.selectedTab = 0;
        } else {
          this.setListTo('all');
          this.selectedTab = 0;
        }
      }
    );

    this.tagsService.getAll()
    .subscribe(tags => {
      this.tags = tags;
      this.tagsLoaded = true;
    });
  }

  onTabChange(event: any) {
    const label = event.tab.textLabel;
    if (label === 'Your Feed') {
      this.setListTo('feed');
    } else if (label === 'Global Feed') {
      this.setListTo('all');
    }
  }

  setListTo(type: string = '', filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.listConfig = {type: type, filters: filters};

    if (this.isAuthenticated) {
      if (type === 'feed' && !Object.keys(filters).length) {
        this.selectedTab = 0;
      } else if (type === 'all' && !Object.keys(filters).length) {
        this.selectedTab = 1;
      } else {
        this.selectedTab = 2;
      }
    } else {
      if (Object.keys(filters).length) {
        this.selectedTab = 1;
      } else {
        this.selectedTab = 0;
      }
    }
  }
}
