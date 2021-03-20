import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {HomeAuthResolver} from './home-auth-resolver.service';
import {SharedModule} from '../shared';
import {HomeRoutingModule} from './home-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
            imports: [
              SharedModule,
              HomeRoutingModule,
              TranslateModule
            ],
            declarations: [
              HomeComponent
            ],
            providers: [
              HomeAuthResolver
            ]
          })
export class HomeModule {
}
