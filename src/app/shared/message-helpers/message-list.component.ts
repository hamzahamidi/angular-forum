import { Component, Input } from '@angular/core';

import { Message, MessageListConfig, MessagesService } from '../../core';
@Component({
  selector: 'app-message-list',
  styleUrls: ['message-list.component.css'],
  templateUrl: './message-list.component.html',
})
export class MessageListComponent {
  constructor(private messagesService: MessagesService) {}

  @Input() limit: number;
  @Input()
  set config(config: MessageListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: MessageListConfig;
  results: Message[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.messagesService.query(this.query).subscribe((data) => {
      this.loading = false;
      this.results = data.messages;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.messagesCount / this.limit)), (val, index) => index + 1);
    });
  }
}
