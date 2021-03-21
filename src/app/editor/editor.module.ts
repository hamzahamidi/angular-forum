import { NgModule } from '@angular/core';

import { EditorComponent } from './editor.component';
import { EditableMessageResolver } from './editable-message-resolver.service';
import { SharedModule } from '../shared';
import { EditorRoutingModule } from './editor-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, EditorRoutingModule, TranslateModule],
  declarations: [EditorComponent],
  providers: [EditableMessageResolver],
})
export class EditorModule {}
