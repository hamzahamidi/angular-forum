import { NgModule } from '@angular/core';

import { ProfileMessagesComponent } from './profile-messages.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule, TranslateModule],
  declarations: [ProfileMessagesComponent, ProfileComponent, ProfileFavoritesComponent],
  providers: [ProfileResolver],
})
export class ProfileModule {}
