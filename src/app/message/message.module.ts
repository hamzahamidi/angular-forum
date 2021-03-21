import { NgModule } from '@angular/core';

import { MessageComponent } from './message.component';
import { MessageCommentComponent } from './message-comment.component';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { MessageRoutingModule } from './message-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MessageResolver } from './message-resolver.service';

@NgModule({
  imports: [SharedModule, MessageRoutingModule, TranslateModule.forChild()],
  declarations: [MessageComponent, MessageCommentComponent, MarkdownPipe],

  providers: [MessageResolver],
})
export class MessageModule {}
