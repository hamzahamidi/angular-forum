import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Comment } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class CommentsService {
  constructor(private apiService: ApiService) {}

  add(slug, payload): Observable<Comment> {
    return this.apiService
      .post(`/messages/${slug}/comments`, { comment: { body: payload } })
      .pipe(map((data) => data.comment));
  }

  getAll(slug): Observable<Comment[]> {
    return this.apiService.get(`/messages/${slug}/comments`).pipe(map((data) => data.comments));
  }

  destroy(commentId, messageSlug) {
    return this.apiService.delete(`/messages/${messageSlug}/comments/${commentId}`);
  }
}
