import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared';
import { SettingsRoutingModule } from './settings-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, SettingsRoutingModule, TranslateModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
