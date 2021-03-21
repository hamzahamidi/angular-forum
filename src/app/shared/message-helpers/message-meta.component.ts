import { Component, Input } from '@angular/core';

import { Message } from '../../core';

@Component({
  selector: 'app-message-meta',
  templateUrl: './message-meta.component.html',
})
export class MessageMetaComponent {
  @Input() message: Message;
}
