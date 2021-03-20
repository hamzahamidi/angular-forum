import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor.component';
import { EditableArticleResolver } from './editable-article-resolver.service';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':slug',
    component: EditorComponent,
    canActivate: [AuthGuard],
    resolve: {
      article: EditableArticleResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
