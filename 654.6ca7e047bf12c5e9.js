"use strict";(self.webpackChunkmaurevair=self.webpackChunkmaurevair||[]).push([[654],{6654:(Ie,C,c)=>{c.r(C),c.d(C,{ReservationsModule:()=>Ae});var p=c(9808),h=c(160),e=c(4893);let D=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reservations"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},directives:[h.lC],encapsulation:2}),n})();var s=c(2382),J=c(7870),Q=c(690),y=c(9),T=c(520),Z=c(8736),v=c(8722),R=c(7531),g=c(3191),m=c(508),P=c(6360),Y=c(8974),A=c(3882);const w=["input"],O=function(n){return{enterDuration:n}},V=["*"],L=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:I});function I(){return{color:"accent",clickAction:"check-indeterminate"}}let B=0;const q=I(),z={provide:s.JU,useExisting:(0,e.Gpc)(()=>N),multi:!0};class j{}const X=(0,m.sb)((0,m.pj)((0,m.Kr)((0,m.Id)(class{constructor(n){this._elementRef=n}}))));let N=(()=>{class n extends X{constructor(t,i,a,r,d,u,l){super(t),this._changeDetectorRef=i,this._focusMonitor=a,this._ngZone=r,this._animationMode=u,this._options=l,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId="mat-checkbox-"+ ++B,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||q,this.color=this.defaultColor=this._options.color||q.color,this.tabIndex=parseInt(d)||0}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(t){this._required=(0,g.Ig)(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t||Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}),this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(t){const i=(0,g.Ig)(t);i!=this.checked&&(this._checked=i,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){const i=(0,g.Ig)(t);i!==this.disabled&&(this._disabled=i,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(t){const i=t!=this._indeterminate;this._indeterminate=(0,g.Ig)(t),i&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(t){let i=this._currentCheckState,a=this._elementRef.nativeElement;if(i!==t&&(this._currentAnimationClass.length>0&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);const r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(r)},1e3)})}}_emitChangeEvent(){const t=new j;t.source=this,t.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(t),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_onInputClick(t){var i;const a=null===(i=this._options)||void 0===i?void 0:i.clickAction;t.stopPropagation(),this.disabled||"noop"===a?!this.disabled&&"noop"===a&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==a&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(t,i){t?this._focusMonitor.focusVia(this._inputElement,t,i):this._inputElement.nativeElement.focus(i)}_onInteractionEvent(t){t.stopPropagation()}_getAnimationClassForCheckStateTransition(t,i){if("NoopAnimations"===this._animationMode)return"";let a="";switch(t){case 0:if(1===i)a="unchecked-checked";else{if(3!=i)return"";a="unchecked-indeterminate"}break;case 2:a=1===i?"unchecked-checked":"unchecked-indeterminate";break;case 1:a=2===i?"checked-unchecked":"checked-indeterminate";break;case 3:a=1===i?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${a}`}_syncIndeterminate(t){const i=this._inputElement;i&&(i.nativeElement.indeterminate=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(Y.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(P.Qb,8),e.Y36(L,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(1&t&&(e.Gf(w,5),e.Gf(m.wG,5)),2&t){let a;e.iGM(a=e.CRH())&&(i._inputElement=a.first),e.iGM(a=e.CRH())&&(i.ripple=a.first)}},hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(t,i){2&t&&(e.Ikx("id",i.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checkbox-indeterminate",i.indeterminate)("mat-checkbox-checked",i.checked)("mat-checkbox-disabled",i.disabled)("mat-checkbox-label-before","before"==i.labelPosition)("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[e._Bn([z]),e.qOj],ngContentSelectors:V,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(t,i){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.NdJ("change",function(r){return i._onInteractionEvent(r)})("click",function(r){return i._onInputClick(r)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA()(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return i._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA()()),2&t){const a=e.MAs(1),r=e.MAs(13);e.uIk("for",i.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!r.textContent||!r.textContent.trim()),e.xp6(1),e.Q6J("id",i.inputId)("required",i.required)("checked",i.checked)("disabled",i.disabled)("tabIndex",i.tabIndex),e.uIk("value",i.value)("name",i.name)("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-checked",i._getAriaChecked())("aria-describedby",i.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",a)("matRippleDisabled",i._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,O,"NoopAnimations"===i._animationMode?0:150))}},directives:[m.wG,A.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"],encapsulation:2,changeDetection:0}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.si,m.BQ,A.Q8,M],m.BQ,M]}),n})();function H(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," First name must contain only letters "),e.qZA())}function W(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function ee(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Last name must contain only letters "),e.qZA())}function te(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function ie(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Please enter a valid email address "),e.qZA())}function ne(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function ae(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Please enter a valid phone number "),e.qZA())}function oe(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function re(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",21),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().isEconomy=a}),e.TgZ(2,"p"),e._uU(3,"Economy"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.isEconomy)}}function se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",22),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().isPremium=a}),e.TgZ(2,"p",23),e._uU(3,"PremiumEconomy"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.isPremium)}}function ce(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"mat-checkbox",24),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().isFirst=a}),e.TgZ(2,"p",23),e._uU(3,"First"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.isFirst)}}function me(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Seat number is invalid "),e.qZA())}function le(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}const x=function(n){return{disabled:n}};function he(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"input",25),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.YNc(4,me,2,0,"span",7),e.YNc(5,le,2,0,"span",7),e.qZA()),2&n){const t=e.oxw();let i,a;e.xp6(1),e.Q6J("ngClass",e.VKq(4,x,!t.isEconomy)),e.xp6(2),e.hij("Max: ",t.maxSeatEconomy,""),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isEconomy&&""!==(null==(i=t.createReservation.get("seatType").get("Economy"))?null:i.value)&&(null==(i=t.createReservation.get("seatType").get("Economy"))?null:i.invalid)),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isEconomy&&""===(null==(a=t.createReservation.get("seatType").get("Economy"))?null:a.value))}}function de(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Seat number is invalid "),e.qZA())}function ue(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function pe(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"input",26),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.YNc(4,de,2,0,"span",7),e.YNc(5,ue,2,0,"span",7),e.qZA()),2&n){const t=e.oxw();let i,a;e.xp6(1),e.Q6J("ngClass",e.VKq(4,x,!t.isPremium)),e.xp6(2),e.hij("Max: ",t.maxSeatPremiumEconomy,""),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isPremium&&""!==(null==(i=t.createReservation.get("seatType").get("PremiumEconomy"))?null:i.value)&&(null==(i=t.createReservation.get("seatType").get("PremiumEconomy"))?null:i.invalid)),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isPremium&&""===(null==(a=t.createReservation.get("seatType").get("PremiumEconomy"))?null:a.value))}}function ge(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Seat number is invalid "),e.qZA())}function _e(n,o){1&n&&(e.TgZ(0,"span",20),e._uU(1," Field required "),e.qZA())}function fe(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"input",27),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.YNc(4,ge,2,0,"span",7),e.YNc(5,_e,2,0,"span",7),e.qZA()),2&n){const t=e.oxw();let i,a;e.xp6(1),e.Q6J("ngClass",e.VKq(4,x,!t.isFirst)),e.xp6(2),e.hij("Max: ",t.maxSeatFirst,""),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isFirst&&""!==(null==(i=t.createReservation.get("seatType").get("First"))?null:i.value)&&(null==(i=t.createReservation.get("seatType").get("First"))?null:i.invalid)),e.xp6(1),e.Q6J("ngIf",t.isSubmitted&&t.isFirst&&""===(null==(a=t.createReservation.get("seatType").get("First"))?null:a.value))}}const _=function(n){return{"input-error":n}};let ke=(()=>{class n{constructor(t,i,a,r,d,u,l,f){this._flightsStoreService=t,this._flightDataTransformService=i,this._fb=a,this._httpClient=r,this._activatedRoute=d,this._userService=u,this._router=l,this._changeRef=f,this.isSubmitted=!1,this._flightId="",this.isEconomy=!0,this.isPremium=!1,this.isFirst=!1,this.createReservation=this._fb.group({}),this.getCurrentUserId()}ngOnInit(){this.getFlightId(),this.getFlightDetails(),this.setupReservationForm()}ngOnDestroy(){this._flightIdSubscription&&this._flightIdSubscription.unsubscribe()}makeReservation(){if(this.isSubmitted=!0,this.createReservation.valid){this.updateFlightInfo(this.createReservation.value);const t=JSON.stringify(this.createReservation.value);this._httpClient.post("/api/reservations",t,J.V).subscribe(i=>{})}}updateFlightInfo(t){}getFlightId(){this._flightId=this._activatedRoute.snapshot.params.id}setupReservationForm(){var t,i;const r=/^[A-Za-z]+$/;this.createReservation=this._fb.group({flightId:[this._flightId,""],Origin:[null===(t=this._flightDetails)||void 0===t?void 0:t.Origin,""],Destination:[null===(i=this._flightDetails)||void 0===i?void 0:i.Destination,""],userId:[this._userInfo.id,""],firstName:[this._userInfo.firstName,[s.kI.required,s.kI.pattern(r)]],lastName:[this._userInfo.lastName,[s.kI.required,s.kI.pattern(r)]],email:[this._userInfo.email,[s.kI.required,s.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],phone:[this._userInfo.phone,[s.kI.required,s.kI.minLength(6)]],isPresentEconomy:[!0,""],isPresentPremiumEconomy:["",""],isPresentFirst:["",""],seatType:this._fb.group({Economy:[1,""],PremiumEconomy:["",""],First:["",""]})}),this._changeRef.detectChanges()}getFlightDetails(){this._httpClient.get("/api/flights").subscribe(t=>{this._flightDetails=t.find(i=>i.id===this._flightId),this._bookingInfo=this._flightDataTransformService.manageBookingInfoType(this._flightDetails.BookingInfo),this.seatsInfo()})}seatsInfo(){this.maxSeatEconomy=this.getSeatsAvailableByCategory("Economy"),this.maxSeatPremiumEconomy=this.getSeatsAvailableByCategory("PremiumEconomy"),this.maxSeatFirst=this.getSeatsAvailableByCategory("First"),this.setValidators()}setValidators(){this.createReservation.get("seatType").get("Economy").setValidators([s.kI.min(1),s.kI.max(this.maxSeatEconomy)]),this.createReservation.get("seatType").get("PremiumEconomy").setValidators([s.kI.min(1),s.kI.max(this.maxSeatPremiumEconomy)]),this.createReservation.get("seatType").get("First").setValidators([s.kI.min(1),s.kI.max(this.maxSeatFirst)])}getSeatsAvailableByCategory(t){let i;const a=this._bookingInfo.find(r=>r.CabinClass===t);return i=a?parseInt(null==a?void 0:a.SeatsAvailable):0,i}getCurrentUserId(){this._userService.currentUserInfo().subscribe(t=>{this._userInfo=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Q.z),e.Y36(y.h),e.Y36(s.qu),e.Y36(T.eN),e.Y36(h.gz),e.Y36(Z.K),e.Y36(h.F0),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-reservation"]],decls:50,vars:27,consts:[["novalidate","",1,"form-wrapper","create-reservation"],[1,"form-wrapper__title"],["novalidate","",3,"formGroup"],[1,"input-group"],[1,"input-wrapper","mr-25"],["appearance","fill",3,"ngClass"],["matInput","","formControlName","firstName","type","text"],["class","error",4,"ngIf"],[1,"input-wrapper","ml-25"],["matInput","","formControlName","lastName","type","text"],[1,"input-wrapper","input-wrapper--fluid"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","phone","type","tel"],[1,"input-wrapper__title"],[1,"seatType"],[4,"ngIf"],["formGroupName","seatType",1,"input-wrapper","input-wrapper--fluid"],[1,"seatNumber"],[1,"form-wrapper__cta"],["type","button",1,"btn","btn--primary",3,"click"],[1,"error"],["formControlName","isPresentEconomy",1,"seatType__checkBox",3,"ngModel","ngModelChange"],["formControlName","isPresentPremiumEconomy",1,"seatType__checkBox",3,"ngModel","ngModelChange"],[1,"checkbox__text"],["formControlName","isPresentFirst",1,"seatType__checkBox",3,"ngModel","ngModelChange"],["type","number","formControlName","Economy",1,"seatNumber__input",3,"ngClass"],["type","number","formControlName","PremiumEconomy",1,"seatNumber__input",3,"ngClass"],["type","number","formControlName","First",1,"seatNumber__input",3,"ngClass"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Make a Reservation"),e.qZA(),e.TgZ(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"First Name"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.YNc(10,H,2,0,"span",7),e.YNc(11,W,2,0,"span",7),e.qZA(),e.TgZ(12,"div",8)(13,"mat-form-field",5)(14,"mat-label"),e._uU(15,"Last Name"),e.qZA(),e._UZ(16,"input",9),e.qZA(),e.YNc(17,ee,2,0,"span",7),e.YNc(18,te,2,0,"span",7),e.qZA()(),e.TgZ(19,"div",10)(20,"mat-form-field",5)(21,"mat-label"),e._uU(22,"Email"),e.qZA(),e._UZ(23,"input",11),e.qZA(),e.YNc(24,ie,2,0,"span",7),e.YNc(25,ne,2,0,"span",7),e.qZA(),e.TgZ(26,"div",10)(27,"mat-form-field",5)(28,"mat-label"),e._uU(29,"Phone"),e.qZA(),e._UZ(30,"input",12),e.qZA(),e.YNc(31,ae,2,0,"span",7),e.YNc(32,oe,2,0,"span",7),e.qZA(),e.TgZ(33,"div",10)(34,"p",13),e._uU(35,"Select seat type"),e.qZA(),e.TgZ(36,"div",14),e.YNc(37,re,4,1,"div",15),e.YNc(38,se,4,1,"div",15),e.YNc(39,ce,4,1,"div",15),e.qZA()(),e.TgZ(40,"div",16)(41,"p",13),e._uU(42,"Enter Number of seats"),e.qZA(),e.TgZ(43,"div",17),e.YNc(44,he,6,6,"div",15),e.YNc(45,pe,6,6,"div",15),e.YNc(46,fe,6,6,"div",15),e.qZA()(),e.TgZ(47,"div",18)(48,"button",19),e.NdJ("click",function(){return i.makeReservation()}),e._uU(49," Create "),e.qZA()()()()),2&t){let a,r,d,u,l,f,E,k,F,S,b,U;e.xp6(3),e.Q6J("formGroup",i.createReservation),e.xp6(3),e.Q6J("ngClass",e.VKq(19,_,i.isSubmitted&&(null==(a=i.createReservation.get("firstName"))?null:a.invalid))),e.xp6(4),e.Q6J("ngIf",i.isSubmitted&&""!==(null==(r=i.createReservation.get("firstName"))?null:r.value)&&(null==(r=i.createReservation.get("firstName"))?null:r.invalid)),e.xp6(1),e.Q6J("ngIf",i.isSubmitted&&""===(null==(d=i.createReservation.get("firstName"))?null:d.value)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,_,i.isSubmitted&&(null==(u=i.createReservation.get("lastName"))?null:u.invalid))),e.xp6(4),e.Q6J("ngIf",i.isSubmitted&&""!==(null==(l=i.createReservation.get("lastName"))?null:l.value)&&(null==(l=i.createReservation.get("lastName"))?null:l.invalid)),e.xp6(1),e.Q6J("ngIf",i.isSubmitted&&""===(null==(f=i.createReservation.get("lastName"))?null:f.value)),e.xp6(2),e.Q6J("ngClass",e.VKq(23,_,i.isSubmitted&&(null==(E=i.createReservation.get("email"))?null:E.invalid))),e.xp6(4),e.Q6J("ngIf",i.isSubmitted&&""!==(null==(k=i.createReservation.get("email"))?null:k.value)&&(null==(k=i.createReservation.get("email"))?null:k.invalid)),e.xp6(1),e.Q6J("ngIf",i.isSubmitted&&""===(null==(F=i.createReservation.get("email"))?null:F.value)),e.xp6(2),e.Q6J("ngClass",e.VKq(25,_,i.isSubmitted&&(null==(S=i.createReservation.get("phone"))?null:S.invalid))),e.xp6(4),e.Q6J("ngIf",i.isSubmitted&&""!==(null==(b=i.createReservation.get("phone"))?null:b.value)&&(null==(b=i.createReservation.get("phone"))?null:b.invalid)),e.xp6(1),e.Q6J("ngIf",i.isSubmitted&&""===(null==(U=i.createReservation.get("phone"))?null:U.value)),e.xp6(5),e.Q6J("ngIf",i.maxSeatEconomy>0),e.xp6(1),e.Q6J("ngIf",i.maxSeatPremiumEconomy>0),e.xp6(1),e.Q6J("ngIf",i.maxSeatFirst>0),e.xp6(5),e.Q6J("ngIf",i.maxSeatEconomy>0),e.xp6(1),e.Q6J("ngIf",i.maxSeatPremiumEconomy>0),e.xp6(1),e.Q6J("ngIf",i.maxSeatFirst>0)}},directives:[s._Y,s.JL,s.sg,v.KE,p.mk,v.hX,R.Nt,s.Fj,s.JJ,s.u,p.O5,N,s.x0,s.wV],encapsulation:2}),n})();function be(n,o){if(1&n&&(e.TgZ(0,"div",12)(1,"span",13),e._uU(2," Economy: "),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(4),e.hij(" ",t.seatType.Economy," ")}}function ve(n,o){if(1&n&&(e.TgZ(0,"div",12)(1,"span",13),e._uU(2," PremiumEconomy "),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(4),e.hij(" ",t.seatType.PremiumEconomy," ")}}function xe(n,o){if(1&n&&(e.TgZ(0,"div",12)(1,"span",13),e._uU(2," First "),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(4),e.hij(" ",t.seatType.First," ")}}function Ce(n,o){if(1&n&&(e.TgZ(0,"li",5)(1,"div",6)(2,"div",7)(3,"p",8),e._uU(4,"Flight Number: "),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.TgZ(7,"div",7)(8,"p",8),e._uU(9,"Name: "),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA()(),e.TgZ(12,"div",7)(13,"p",8),e._uU(14,"Phone: "),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.qZA()(),e.TgZ(17,"div",7)(18,"p",8),e._uU(19,"Arrival: "),e.qZA(),e.TgZ(20,"p"),e._uU(21),e.qZA()(),e.TgZ(22,"div",7)(23,"p",8),e._uU(24,"Departure: "),e.qZA(),e.TgZ(25,"p"),e._uU(26),e.qZA()()(),e.TgZ(27,"div",9)(28,"p"),e._uU(29,"Seats Reserved:"),e.qZA()(),e.TgZ(30,"div",10)(31,"ul")(32,"li"),e.YNc(33,be,5,1,"div",11),e.qZA(),e.TgZ(34,"li"),e.YNc(35,ve,5,1,"div",11),e.qZA(),e.TgZ(36,"li"),e.YNc(37,xe,5,1,"div",11),e.qZA()()()()),2&n){const t=o.$implicit,i=e.oxw(2);e.xp6(6),e.Oqu(null==i.flightDetails?null:i.flightDetails.FlightNumber),e.xp6(5),e.Oqu(t.firstName),e.xp6(5),e.Oqu(t.phone),e.xp6(5),e.Oqu(i.getAirportName(null==i.flightDetails?null:i.flightDetails.Origin)),e.xp6(5),e.Oqu(i.getAirportName(null==i.flightDetails?null:i.flightDetails.Destination)),e.xp6(7),e.Q6J("ngIf",t.seatType.Economy),e.xp6(2),e.Q6J("ngIf",t.seatType.PremiumEconomy),e.xp6(2),e.Q6J("ngIf",t.seatType.First)}}function ye(n,o){if(1&n&&(e.TgZ(0,"ul"),e.YNc(1,Ce,38,8,"li",4),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.reservations)}}function Te(n,o){1&n&&(e.TgZ(0,"p",14),e._uU(1,"No reservations has been yet."),e.qZA())}const Ze=[{path:"",component:D,children:[{path:"",component:(()=>{class n{constructor(t,i,a){this._httpClient=t,this._userService=i,this._flightDataTransformService=a,this.getCurrentUserId()}ngOnInit(){this.getReservationInfo(),this.getFlightDetails()}getAirportName(t){return this._flightDataTransformService.getAirportName(t)}getReservationInfo(){this._httpClient.get(`api/reservations?userId=${this._userId}`).subscribe(i=>{this.reservations=i})}getCurrentUserId(){this._userService.currentUserInfo().subscribe(t=>{this._userId=t.id})}getFlightDetails(){this._httpClient.get("/api/flights").subscribe(t=>{const i=this._flightDataTransformService.flightDataTransform(t);this.flightDetails=i.find(a=>{var r;return a.id===(null===(r=this.reservations[0])||void 0===r?void 0:r.flightId)})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.eN),e.Y36(Z.K),e.Y36(y.h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reservations-list"]],decls:5,vars:2,consts:[[1,"flight"],[1,"flight__title"],[4,"ngIf"],["class","flight__noReservation",4,"ngIf"],["class","flight__card",4,"ngFor","ngForOf"],[1,"flight__card"],[1,"flight__details"],[1,"flight__info"],[1,"flight__info__header"],[1,"flight__details__header"],[1,"flight__seats"],["class","flight__seats__info",4,"ngIf"],[1,"flight__seats__info"],[1,"flight__seats__header"],[1,"flight__noReservation"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Revervations"),e.qZA(),e.YNc(3,ye,2,1,"ul",2),e.YNc(4,Te,2,0,"p",3),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",i.reservations.length>0),e.xp6(1),e.Q6J("ngIf",i.reservations.length<=0))},directives:[p.O5,p.sg],encapsulation:2}),n})()},{path:":id/create-reservation",component:ke}]}];let Re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(Ze)],h.Bz]}),n})(),Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[p.ez,h.Bz,Re,s.u5,s.UX,v.lN,R.c,$]]}),n})()}}]);