import { Component, Input } from '@angular/core';

import { Message } from '../../core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
})
export class MessagePreviewComponent {
  @Input() message: Message;

  onToggleFavorite(favorited: boolean) {
    this.message['favorited'] = favorited;

    if (favorited) {
      this.message['favoritesCount']++;
    } else {
      this.message['favoritesCount']--;
    }
  }
}
