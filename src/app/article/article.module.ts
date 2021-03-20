import {NgModule} from '@angular/core';

import {ArticleComponent} from './article.component';
import {ArticleCommentComponent} from './article-comment.component';
import {ArticleResolver} from './article-resolver.service';
import {MarkdownPipe} from './markdown.pipe';
import {SharedModule} from '../shared';
import {ArticleRoutingModule} from './article-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
            imports: [
              SharedModule,
              ArticleRoutingModule,
              TranslateModule.forChild()
            ],
            declarations: [
              ArticleComponent,
              ArticleCommentComponent,
              MarkdownPipe
            ],

            providers: [
              ArticleResolver
            ]
          })
export class ArticleModule {
}
