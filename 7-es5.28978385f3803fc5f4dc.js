!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cRhG:function(i,n,r){"use strict";r.r(n),r.d(n,"ProfileModule",function(){return j});var o,c,s,a,u,f,l=r("ey9i"),b=r("JIr8"),p=r("fXoL"),v=r("tyNb"),d=((o=function(){function i(t,n){e(this,i),this.profilesService=t,this.router=n}return t(i,[{key:"resolve",value:function(e,i){var t=this;return this.profilesService.get(e.params.username).pipe(Object(b.a)(function(e){return t.router.navigateByUrl("/")}))}}]),i}()).\u0275fac=function(e){return new(e||o)(p.Qb(l.d),p.Qb(v.c))},o.\u0275prov=p.Fb({token:o,factory:o.\u0275fac}),o),g=r("M0ag"),h=r("juF/"),m=((s=function(){function i(t,n){e(this,i),this.route=t,this.router=n,this.articlesConfig={type:"all",filters:{}}}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe(function(i){e.profile=i.profile,e.articlesConfig={type:"all",filters:{}},e.articlesConfig.filters.author=e.profile.username})}}]),i}()).\u0275fac=function(e){return new(e||s)(p.Jb(v.a),p.Jb(v.c))},s.\u0275cmp=p.Db({type:s,selectors:[["app-profile-articles"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,i){1&e&&p.Kb(0,"app-article-list",0),2&e&&p.bc("limit",10)("config",i.articlesConfig)},directives:[h.a],encapsulation:2}),s),L=((c=function(){function i(t,n){e(this,i),this.route=t,this.router=n,this.favoritesConfig={type:"all",filters:{}}}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe(function(i){e.profile=i.profile,e.favoritesConfig.filters.favorited=e.profile.username})}}]),i}()).\u0275fac=function(e){return new(e||c)(p.Jb(v.a),p.Jb(v.c))},c.\u0275cmp=p.Db({type:c,selectors:[["app-profile-favorites"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,i){1&e&&p.Kb(0,"app-article-list",0),2&e&&p.bc("limit",10)("config",i.favoritesConfig)},directives:[h.a],encapsulation:2}),c),y=r("bOdf"),M=r("vkgz"),k=r("UCte"),w=function(){return["/settings"]},O=function(){return{exact:!0}},C=function(e){return["/profile",e]},J=function(e){return["/profile",e,"favorites"]},z=[{path:":username",component:(a=function(){function i(t,n){e(this,i),this.route=t,this.userService=n}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.data.pipe(Object(y.a)(function(i){return e.profile=i.profile,e.userService.currentUser.pipe(Object(M.a)(function(i){e.currentUser=i,e.isUser=e.currentUser.username===e.profile.username}))})).subscribe()}},{key:"onToggleFollowing",value:function(e){this.profile.following=e}}]),i}(),a.\u0275fac=function(e){return new(e||a)(p.Jb(v.a),p.Jb(l.f))},a.\u0275cmp=p.Db({type:a,selectors:[["app-profile-page"]],decls:26,vars:18,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"hidden","profile","toggle"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink","hidden"],[1,"ion-gear-a"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"]],template:function(e,i){1&e&&(p.Mb(0,"div",0),p.Mb(1,"div",1),p.Mb(2,"div",2),p.Mb(3,"div",3),p.Mb(4,"div",4),p.Kb(5,"img",5),p.Mb(6,"h4"),p.lc(7),p.Lb(),p.Mb(8,"p"),p.lc(9),p.Lb(),p.Mb(10,"app-follow-button",6),p.Tb("toggle",function(e){return i.onToggleFollowing(e)}),p.Lb(),p.Mb(11,"a",7),p.Kb(12,"i",8),p.lc(13," Edit Profile Settings "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(14,"div",2),p.Mb(15,"div",3),p.Mb(16,"div",4),p.Mb(17,"div",9),p.Mb(18,"ul",10),p.Mb(19,"li",11),p.Mb(20,"a",12),p.lc(21," My Posts "),p.Lb(),p.Lb(),p.Mb(22,"li",11),p.Mb(23,"a",12),p.lc(24," Favorited Posts "),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Kb(25,"router-outlet"),p.Lb(),p.Lb(),p.Lb(),p.Lb()),2&e&&(p.zb(5),p.bc("src",i.profile.image,p.ic),p.zb(2),p.mc(i.profile.username),p.zb(2),p.mc(i.profile.bio),p.zb(1),p.bc("hidden",i.isUser)("profile",i.profile),p.zb(1),p.bc("routerLink",p.cc(11,w))("hidden",!i.isUser),p.zb(9),p.bc("routerLinkActiveOptions",p.cc(12,O))("routerLink",p.dc(13,C,i.profile.username)),p.zb(3),p.bc("routerLinkActiveOptions",p.cc(15,O))("routerLink",p.dc(16,J,i.profile.username)))},directives:[k.a,v.e,v.d,v.g],encapsulation:2}),a),resolve:{profile:d},children:[{path:"",component:m},{path:"favorites",component:L}]}],U=((f=function i(){e(this,i)}).\u0275fac=function(e){return new(e||f)},f.\u0275mod=p.Hb({type:f}),f.\u0275inj=p.Gb({imports:[[v.f.forChild(z)],v.f]}),f),j=((u=function i(){e(this,i)}).\u0275fac=function(e){return new(e||u)},u.\u0275mod=p.Hb({type:u}),u.\u0275inj=p.Gb({providers:[d],imports:[[g.a,U]]}),u)}}])}();