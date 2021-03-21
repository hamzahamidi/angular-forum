import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessagesService, Comment, CommentsService, User, UserService } from '../core';
import { Message } from '../core/models/message.model';

@Component({
  selector: 'app-message-page',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  message: Message;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors;
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Retreive the prefetched message
    this.route.data.subscribe((data: { message: Message }) => {
      this.message = data.message;

      // Load the comments on this message
      this.populateComments();
    });

    // Load the current user's data
    this.userService.currentUser.subscribe((userData: User) => {
      this.currentUser = userData;

      this.canModify = this.currentUser.username === this.message.author.username;
    });
  }

  onToggleFavorite(favorited: boolean) {
    this.message.favorited = favorited;

    if (favorited) {
      this.message.favoritesCount++;
    } else {
      this.message.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.message.author.following = following;
  }

  deleteMessage() {
    this.isDeleting = true;

    this.messagesService.destroy(this.message.slug).subscribe((success) => {
      this.router.navigateByUrl('/');
    });
  }

  populateComments() {
    this.commentsService.getAll(this.message.slug).subscribe((comments) => (this.comments = comments));
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService.add(this.message.slug, commentBody).subscribe(
      (comment) => {
        this.comments.unshift(comment);
        this.commentControl.reset('');
        this.isSubmitting = false;
      },
      (errors) => {
        this.isSubmitting = false;
        this.commentFormErrors = errors;
      }
    );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.message.slug).subscribe((success) => {
      this.comments = this.comments.filter((item) => item !== comment);
    });
  }
}
