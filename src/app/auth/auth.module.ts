import {NgModule} from '@angular/core';

import {AuthComponent} from './auth.component';
import {NoAuthGuard} from './no-auth-guard.service';
import {SharedModule} from '../shared';
import {AuthRoutingModule} from './auth-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
            imports: [
              SharedModule,
              AuthRoutingModule,
              TranslateModule
            ],
            declarations: [
              AuthComponent
            ],
            providers: [
              NoAuthGuard
            ]
          })
export class AuthModule {
}
