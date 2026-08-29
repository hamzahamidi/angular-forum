import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
    name: 'markdown',
    standalone: false
})
export class MarkdownPipe implements PipeTransform {
  transform(content: string): string {
    return marked(content, { sanitize: true });
  }
}
