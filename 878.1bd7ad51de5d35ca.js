"use strict";(self.webpackChunkang2_forum=self.webpackChunkang2_forum||[]).push([[878],{7878:(M,l,n)=>{n.r(l),n.d(l,{ProfileModule:()=>U});var u=n(7221),e=n(2096),a=n(7543),s=n(6103);let f=(()=>{class t{constructor(o,r){this.profilesService=o,this.router=r}resolve(o,r){return this.profilesService.get(o.params.username).pipe((0,u.K)(L=>this.router.navigateByUrl("/")))}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(a.L0),e.LFG(s.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var m=n(1404),p=n(870);let v=(()=>{class t{constructor(o,r){this.route=o,this.router=r,this.articlesConfig={type:"all",filters:{}}}ngOnInit(){this.route.parent.data.subscribe(o=>{this.profile=o.profile,this.articlesConfig={type:"all",filters:{}},this.articlesConfig.filters.author=this.profile.username})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-articles"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(o,r){1&o&&e._UZ(0,"app-article-list",0),2&o&&e.Q6J("limit",10)("config",r.articlesConfig)},directives:[p.P],encapsulation:2}),t})(),g=(()=>{class t{constructor(o,r){this.route=o,this.router=r,this.favoritesConfig={type:"all",filters:{}}}ngOnInit(){this.route.parent.data.subscribe(o=>{this.profile=o.profile,this.favoritesConfig.filters.favorited=this.profile.username})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-favorites"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(o,r){1&o&&e._UZ(0,"app-article-list",0),2&o&&e.Q6J("limit",10)("config",r.favoritesConfig)},directives:[p.P],encapsulation:2}),t})();var d=n(1406),h=n(2868),P=n(1322);const C=function(){return["/settings"]},c=function(){return{exact:!0}},y=function(t){return["/profile",t]},Z=function(t){return["/profile",t,"favorites"]},F=[{path:":username",component:(()=>{class t{constructor(o,r){this.route=o,this.userService=r}ngOnInit(){this.route.data.pipe((0,d.b)(o=>(this.profile=o.profile,this.userService.currentUser.pipe((0,h.b)(r=>{this.currentUser=r,this.isUser=this.currentUser.username===this.profile.username}))))).subscribe()}onToggleFollowing(o){this.profile.following=o}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(a.KD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-page"]],decls:26,vars:18,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"hidden","profile","toggle"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink","hidden"],[1,"ion-gear-a"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"app-follow-button",6),e.NdJ("toggle",function(T){return r.onToggleFollowing(T)}),e.qZA(),e.TgZ(11,"a",7),e._UZ(12,"i",8),e._uU(13," Edit Profile Settings "),e.qZA()()()()(),e.TgZ(14,"div",2)(15,"div",3)(16,"div",4)(17,"div",9)(18,"ul",10)(19,"li",11)(20,"a",12),e._uU(21," My Posts "),e.qZA()(),e.TgZ(22,"li",11)(23,"a",12),e._uU(24," Favorited Posts "),e.qZA()()()(),e._UZ(25,"router-outlet"),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("src",r.profile.image,e.LSH),e.xp6(2),e.Oqu(r.profile.username),e.xp6(2),e.Oqu(r.profile.bio),e.xp6(1),e.Q6J("hidden",r.isUser)("profile",r.profile),e.xp6(1),e.Q6J("routerLink",e.DdM(11,C))("hidden",!r.isUser),e.xp6(9),e.Q6J("routerLinkActiveOptions",e.DdM(12,c))("routerLink",e.VKq(13,y,r.profile.username)),e.xp6(3),e.Q6J("routerLinkActiveOptions",e.DdM(15,c))("routerLink",e.VKq(16,Z,r.profile.username)))},directives:[P.I,s.yS,s.Od,s.lC],encapsulation:2}),t})(),resolve:{profile:f},children:[{path:"",component:v},{path:"favorites",component:g}]}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(F)],s.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[f],imports:[[m.m8,A]]}),t})()}}]);