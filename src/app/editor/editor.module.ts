import {NgModule} from '@angular/core';

import {EditorComponent} from './editor.component';
import {EditableArticleResolver} from './editable-article-resolver.service';
import {SharedModule} from '../shared';
import {EditorRoutingModule} from './editor-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
            imports: [SharedModule, EditorRoutingModule, TranslateModule],
            declarations: [EditorComponent],
            providers: [EditableArticleResolver]
          })
export class EditorModule {
}
