import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Message, MessageListConfig } from '../models';
import { map } from 'rxjs/operators';

export const MESSAGE_PATH = '/articles'; // CAVUS ==> /messages

@Injectable()
export class MessagesService {
  constructor(private apiService: ApiService) {}

  query(config: MessageListConfig): Observable<{ messages: Message[]; messagesCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters).forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
      .get(MESSAGE_PATH + (config.type === 'feed' ? '/feed' : ''), new HttpParams({ fromObject: params }))
      .pipe(
        map((articles) => {
          return { messages: articles.articles, messagesCount: articles.articlesCount };
        })
      );
  }

  get(slug): Observable<Message> {
    return this.apiService.get(MESSAGE_PATH + '/' + slug).pipe(
      map((data) => data.article),
      map((article) => article) // extraire article devrait suffire en attendant cavus
    );
  }

  destroy(slug) {
    return this.apiService.delete(MESSAGE_PATH + '/' + slug);
  }

  save(message): Observable<Message> {
    // If we're updating an existing message
    if (message.slug) {
      return this.apiService
        .put(MESSAGE_PATH + '/' + message.slug, { article: message })
        .pipe(map((data) => data.message));

      // Otherwise, create a new message
    } else {
      return this.apiService.post(MESSAGE_PATH + '/', { article: message }).pipe(map((data) => data.message));
    }
  }

  favorite(slug): Observable<Message> {
    return this.apiService.post(MESSAGE_PATH + '/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Message> {
    return this.apiService.delete(MESSAGE_PATH + '/' + slug + '/favorite');
  }
}
