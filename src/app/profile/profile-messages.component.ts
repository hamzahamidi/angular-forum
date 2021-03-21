import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageListConfig, Profile } from '../core';

@Component({
  selector: 'app-profile-messages',
  templateUrl: './profile-messages.component.html',
})
export class ProfileMessagesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  profile: Profile;
  messagesConfig: MessageListConfig = {
    type: 'all',
    filters: {},
  };

  ngOnInit() {
    this.route.parent.data.subscribe((data: { profile: Profile }) => {
      this.profile = data.profile;
      this.messagesConfig = {
        type: 'all',
        filters: {},
      }; // Only method I found to refresh message load on swap
      this.messagesConfig.filters.author = this.profile.username;
    });
  }
}
