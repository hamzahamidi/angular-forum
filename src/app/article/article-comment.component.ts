import { Component, computed, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Comment, UserService, FALLBACK_AVATAR } from '../core';

@Component({
    selector: 'app-article-comment',
    templateUrl: './article-comment.component.html',
    standalone: false
})
export class ArticleCommentComponent {
  constructor(
    private userService: UserService
  ) {}

  readonly comment = input.required<Comment>();
  readonly deleteComment = output<boolean>();

  private readonly currentUser = toSignal(
    this.userService.currentUser,
    { requireSync: true }
  );

  readonly canModify = computed(() => this.currentUser().username === this.comment().author.username);

  deleteClicked() {
    this.deleteComment.emit(true);
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
