import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {FooterComponent, HeaderComponent, SharedModule} from './shared';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: './assets/i18n/', suffix: '.json'}
  ]);
}

@NgModule({
            declarations: [AppComponent, FooterComponent, HeaderComponent],
            imports: [
              BrowserModule,
              CoreModule,
              SharedModule,
              HomeModule,
              AuthModule,
              AppRoutingModule,
              TranslateModule.forRoot({
                                        loader: {
                                          provide: TranslateLoader,
                                          useFactory: createTranslateLoader,
                                          deps: [HttpClient]
                                        }
                                      })
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
