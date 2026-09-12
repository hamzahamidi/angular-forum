import { Component, computed, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import {
  Article,
  ArticlesService,
  Comment,
  CommentsService,
  Errors,
  User,
  UserService,
  FALLBACK_AVATAR
} from '../core';

@Component({
    selector: 'app-article-page',
    templateUrl: './article.component.html',
    standalone: false
})
export class ArticleComponent {
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  private readonly resolvedArticle = toSignal(
    this.route.data.pipe(map(data => data['article'] as Article)),
    { requireSync: true }
  );

  private readonly loadedComments = toSignal(
    this.route.data.pipe(
      map(data => (data['article'] as Article).slug),
      switchMap(slug => this.commentsService.getAll(slug))
    ),
    { initialValue: [] as Comment[] }
  );

  readonly currentUser = toSignal(
    this.userService.currentUser,
    { initialValue: {} as User }
  );

  readonly article = linkedSignal(() => this.resolvedArticle());
  readonly comments = linkedSignal(() => this.loadedComments());
  readonly canModify = computed(() => this.currentUser().username === this.article().author.username);

  readonly commentFormErrors = signal<Errors>({ errors: {} });
  readonly isSubmitting = signal(false);
  readonly isDeleting = signal(false);
  commentControl = new UntypedFormControl();

  onToggleFavorite(favorited: boolean) {
    this.article.update(article => ({
      ...article,
      favorited,
      favoritesCount: article.favoritesCount + (favorited ? 1 : -1)
    }));
  }

  onToggleFollowing(following: boolean) {
    this.article.update(article => ({
      ...article,
      author: { ...article.author, following }
    }));
  }

  deleteArticle() {
    this.isDeleting.set(true);

    this.articlesService.destroy(this.article().slug)
      .subscribe(() => this.router.navigateByUrl('/'));
  }

  addComment() {
    this.isSubmitting.set(true);
    this.commentFormErrors.set({ errors: {} });

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.article().slug, commentBody)
      .subscribe({
        next: comment => {
          this.comments.update(comments => [comment, ...comments]);
          this.commentControl.reset('');
          this.isSubmitting.set(false);
        },
        error: errors => {
          this.isSubmitting.set(false);
          this.commentFormErrors.set(errors);
        }
      });
  }

  onDeleteComment(comment: Comment) {
    this.commentsService.destroy(comment.id, this.article().slug)
      .subscribe(() => {
        this.comments.update(comments => comments.filter(item => item !== comment));
      });
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = FALLBACK_AVATAR;
  }
}
