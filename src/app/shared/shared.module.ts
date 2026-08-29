import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({ declarations: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        FavoriteButtonComponent,
        FollowButtonComponent,
        ListErrorsComponent,
        ShowAuthedDirective
    ],
    exports: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        CommonModule,
        FavoriteButtonComponent,
        FollowButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        ListErrorsComponent,
        RouterModule,
        ShowAuthedDirective
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
