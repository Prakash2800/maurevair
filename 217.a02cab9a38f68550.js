"use strict";(self.webpackChunkmaurevair=self.webpackChunkmaurevair||[]).push([[217],{5217:(en,U,r)=>{r.r(U),r.d(U,{AuthenticationModule:()=>tn});var d=r(9808),u=r(160),n=r(4893);let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-authentication"]],decls:2,vars:0,consts:[[1,"authentication"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"router-outlet"),n.qZA())},directives:[u.lC],encapsulation:2}),e})();var i=r(2382),Y=r(7870),F=r(520),f=r(8722),v=r(7531);function L(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," First name must contain only letters "),n.qZA())}function k(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}function K(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Last name must contain only letters "),n.qZA())}function V(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}function P(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}function z(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Password must contain more than 6 characters "),n.qZA())}function M(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}function E(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Please enter a valid email address "),n.qZA())}function X(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}function B(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Please enter a valid phone number "),n.qZA())}function O(e,l){1&e&&(n.TgZ(0,"span",18),n._uU(1," Field required "),n.qZA())}const g=function(e){return{"input-error":e}};let R=(()=>{class e{constructor(o,t,a){this._fb=o,this._router=t,this._httpClient=a,this.isSubmitted=!1,this.signUpForm=this._fb.group({})}ngOnInit(){this.setUpSignUpForm()}setUpSignUpForm(){const t=/^[A-Za-z]+$/;this.signUpForm=this._fb.group({firstName:["",[i.kI.required,i.kI.pattern(t)]],lastName:["",[i.kI.required,i.kI.pattern(t)]],userName:["",[i.kI.required]],password:["",[i.kI.required,i.kI.minLength(2)]],email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],phone:["",[i.kI.required,i.kI.minLength(6)]]})}onCreate(){if(this.isSubmitted=!0,this.signUpForm.valid){const o=JSON.stringify(this.signUpForm.value);this._httpClient.post("api/signupUsers",o,Y.V).subscribe(t=>{this.signUpForm.reset(),this._router.navigate(["account/login"])})}}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(i.qu),n.Y36(u.F0),n.Y36(F.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:52,vars:30,consts:[["novalidate","",1,"form-wrapper"],[1,"form-wrapper__title"],[3,"formGroup"],[1,"input-group"],[1,"input-wrapper","mr-25"],["appearance","fill",3,"ngClass"],["matInput","","formControlName","firstName","type","text"],["class","error",4,"ngIf"],[1,"input-wrapper","ml-25"],["matInput","","formControlName","lastName","type","text"],["matInput","","formControlName","userName","type","text"],["matInput","","formControlName","password","type","password"],[1,"input-wrapper","input-wrapper--fluid"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","phone","type","tel"],[1,"form-wrapper__cta"],["type","button",1,"btn","btn--primary",3,"click"],["href","","routerLink","/account/login"],[1,"error"]],template:function(o,t){if(1&o&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2,"Create an account"),n.qZA(),n.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),n._uU(8,"First Name"),n.qZA(),n._UZ(9,"input",6),n.qZA(),n.YNc(10,L,2,0,"span",7),n.YNc(11,k,2,0,"span",7),n.qZA(),n.TgZ(12,"div",8)(13,"mat-form-field",5)(14,"mat-label"),n._uU(15,"Last Name"),n.qZA(),n._UZ(16,"input",9),n.qZA(),n.YNc(17,K,2,0,"span",7),n.YNc(18,V,2,0,"span",7),n.qZA()(),n.TgZ(19,"div",3)(20,"div",4)(21,"mat-form-field",5)(22,"mat-label"),n._uU(23,"User Name"),n.qZA(),n._UZ(24,"input",10),n.qZA(),n.YNc(25,P,2,0,"span",7),n.qZA(),n.TgZ(26,"div",8)(27,"mat-form-field",5)(28,"mat-label"),n._uU(29,"Password"),n.qZA(),n._UZ(30,"input",11),n.qZA(),n.YNc(31,z,2,0,"span",7),n.YNc(32,M,2,0,"span",7),n.qZA()(),n.TgZ(33,"div",12)(34,"mat-form-field",5)(35,"mat-label"),n._uU(36,"Email"),n.qZA(),n._UZ(37,"input",13),n.qZA(),n.YNc(38,E,2,0,"span",7),n.YNc(39,X,2,0,"span",7),n.qZA(),n.TgZ(40,"div",12)(41,"mat-form-field",5)(42,"mat-label"),n._uU(43,"Phone"),n.qZA(),n._UZ(44,"input",14),n.qZA(),n.YNc(45,B,2,0,"span",7),n.YNc(46,O,2,0,"span",7),n.qZA(),n.TgZ(47,"div",15)(48,"button",16),n.NdJ("click",function(){return t.onCreate()}),n._uU(49," Create "),n.qZA()(),n.TgZ(50,"a",17),n._uU(51,"Already Registered? Click to login!!"),n.qZA()()()),2&o){let a,s,m,_,p,A,N,S,T,c,b,I,h,J,w,Z,y;n.xp6(3),n.Q6J("formGroup",t.signUpForm),n.xp6(3),n.Q6J("ngClass",n.VKq(18,g,t.isSubmitted&&(null==(a=t.signUpForm.get("firstName"))?null:a.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(s=t.signUpForm.get("firstName"))?null:s.value)&&(null==(s=t.signUpForm.get("firstName"))?null:s.invalid)),n.xp6(1),n.Q6J("ngIf",t.isSubmitted&&""===(null==(m=t.signUpForm.get("firstName"))?null:m.value)),n.xp6(2),n.Q6J("ngClass",n.VKq(20,g,t.isSubmitted&&(null==(_=t.signUpForm.get("lastName"))?null:_.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(p=t.signUpForm.get("lastName"))?null:p.value)&&(null==(p=t.signUpForm.get("lastName"))?null:p.invalid)),n.xp6(1),n.Q6J("ngIf",t.isSubmitted&&""===(null==(A=t.signUpForm.get("lastName"))?null:A.value)),n.xp6(3),n.Q6J("ngClass",n.VKq(22,g,t.isSubmitted&&(null==(N=t.signUpForm.get("userName"))?null:N.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""===(null==(S=t.signUpForm.get("userName"))?null:S.value)),n.xp6(2),n.Q6J("ngClass",n.VKq(24,g,t.isSubmitted&&(null==(T=t.signUpForm.get("password"))?null:T.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(c=t.signUpForm.get("password"))?null:c.value)&&(null==(c=t.signUpForm.get("password"))?null:c.invalid)),n.xp6(1),n.Q6J("ngIf",t.isSubmitted&&""===(null==(b=t.signUpForm.get("password"))?null:b.value)),n.xp6(2),n.Q6J("ngClass",n.VKq(26,g,t.isSubmitted&&(null==(I=t.signUpForm.get("email"))?null:I.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(h=t.signUpForm.get("email"))?null:h.value)&&(null==(h=t.signUpForm.get("email"))?null:h.invalid)),n.xp6(1),n.Q6J("ngIf",t.isSubmitted&&""===(null==(J=t.signUpForm.get("email"))?null:J.value)),n.xp6(2),n.Q6J("ngClass",n.VKq(28,g,t.isSubmitted&&(null==(w=t.signUpForm.get("phone"))?null:w.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(Z=t.signUpForm.get("phone"))?null:Z.value)&&(null==(Z=t.signUpForm.get("phone"))?null:Z.invalid)),n.xp6(1),n.Q6J("ngIf",t.isSubmitted&&""===(null==(y=t.signUpForm.get("phone"))?null:y.value))}},directives:[i._Y,i.JL,i.sg,f.KE,d.mk,f.hX,v.Nt,i.Fj,i.JJ,i.u,d.O5,u.yS],encapsulation:2}),e})();var j=r(597),G=r(8736);function $(e,l){1&e&&(n.TgZ(0,"span",14),n._uU(1,"Field required"),n.qZA())}function D(e,l){1&e&&(n.TgZ(0,"span",14),n._uU(1,"Field required"),n.qZA())}function H(e,l){1&e&&(n.TgZ(0,"span",14),n._uU(1,"Minimum 6 characters"),n.qZA())}function W(e,l){1&e&&(n.TgZ(0,"span",15),n._uU(1,"User name or password is invalid"),n.qZA())}const C=function(e){return{"input-error":e}};let q=(()=>{class e{constructor(o,t,a,s,m){this._fb=o,this._router=t,this._httpClient=a,this._authService=s,this._userService=m,this.isSubmitted=!1,this.noProfileFound=!1,this.loginForm=this._fb.group({})}ngOnInit(){this.setUpLoginForm()}onLogin(){this.isSubmitted=!0,this.loginForm.valid&&this._httpClient.get("/api/signupUsers").subscribe(o=>{const t=o.find(a=>a.userName===this.loginForm.value.userName&&a.password===this.loginForm.value.password);t?(this.loginForm.reset(),this._router.navigate(["flights"]),this._authService.logUserStatus(!0),this._userService.setCurrentUserInfo(t.id),this.initiateEvent(t.id)):this.noProfileFound=!0})}initiateEvent(o){localStorage.setItem("token",o.toString())}setUpLoginForm(){this.loginForm=this._fb.group({userName:["",[i.kI.required]],password:["",[i.kI.required,i.kI.minLength(2)]]})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(i.qu),n.Y36(u.F0),n.Y36(F.eN),n.Y36(j.e),n.Y36(G.K))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:25,vars:11,consts:[["novalidate","",1,"form-wrapper"],[1,"form-wrapper__title"],[3,"formGroup"],[1,"input-group"],[1,"input-wrapper","mr-25"],["appearance","fill",3,"ngClass"],["formControlName","userName","matInput","","type","text"],["class","error",4,"ngIf"],[1,"input-wrapper","ml-25"],["formControlName","password","matInput","","type","text"],["class","form-wrapper__error",4,"ngIf"],[1,"form-wrapper__cta"],["type","button",1,"btn","btn--primary",3,"click"],["href","","routerLink","/account/signup"],[1,"error"],[1,"form-wrapper__error"]],template:function(o,t){if(1&o&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2,"Login"),n.qZA(),n.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),n._uU(8,"User name"),n.qZA(),n._UZ(9,"input",6),n.qZA(),n.YNc(10,$,2,0,"span",7),n.qZA(),n.TgZ(11,"div",8)(12,"mat-form-field",5)(13,"mat-label"),n._uU(14,"Password"),n.qZA(),n._UZ(15,"input",9),n.qZA(),n.YNc(16,D,2,0,"span",7),n._UZ(17,"br"),n.YNc(18,H,2,0,"span",7),n.qZA()(),n.YNc(19,W,2,0,"span",10),n.TgZ(20,"div",11)(21,"button",12),n.NdJ("click",function(){return t.onLogin()}),n._uU(22," Login "),n.qZA()(),n.TgZ(23,"a",13),n._uU(24,"New User? Click to signup!!"),n.qZA()()()),2&o){let a,s,m,_,p;n.xp6(3),n.Q6J("formGroup",t.loginForm),n.xp6(3),n.Q6J("ngClass",n.VKq(7,C,t.isSubmitted&&(null==(a=t.loginForm.get("userName"))?null:a.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&(null==(s=t.loginForm.get("userName"))?null:s.invalid)),n.xp6(2),n.Q6J("ngClass",n.VKq(9,C,t.isSubmitted&&(null==(m=t.loginForm.get("password"))?null:m.invalid))),n.xp6(4),n.Q6J("ngIf",t.isSubmitted&&""===(null==(_=t.loginForm.get("password"))?null:_.value)),n.xp6(2),n.Q6J("ngIf",t.isSubmitted&&""!==(null==(p=t.loginForm.get("password"))?null:p.value)&&(null==(p=t.loginForm.get("password"))?null:p.invalid)),n.xp6(1),n.Q6J("ngIf",t.noProfileFound)}},directives:[i._Y,i.JL,i.sg,f.KE,d.mk,f.hX,i.Fj,v.Nt,i.JJ,i.u,d.O5,u.yS],encapsulation:2}),e})();const x=[{path:"",component:Q,children:[{path:"",component:q},{path:"signup",component:R},{path:"login",component:q}]}];let nn=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.Bz.forChild(x)],u.Bz]}),e})(),tn=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[],imports:[[d.ez,u.Bz,nn,i.u5,i.UX,f.lN,v.c]]}),e})()}}]);