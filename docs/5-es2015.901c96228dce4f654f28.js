(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Rs85:function(e,t,r){"use strict";r.r(t),r.d(t,"HairdresserDetailModule",(function(){return D}));var n=r("ofXK"),c=r("tyNb"),i=r("hctd"),a=r("fXoL"),s=r("LpOf"),o=r("AytR"),b=r("dbUT");function d(e,t){if(1&e&&(a.Vb(0,"div"),a.Rb(1,"img",7),a.Ub()),2&e){const e=a.gc();a.Bb(1),a.lc("src",e.createImagePath(e.hairdresser.bannerPath),a.zc)}}function l(e,t){1&e&&a.Rb(0,"img",8)}let m=(()=>{class e{constructor(){}ngOnInit(){}createImagePath(e){return`${o.a.fullApiUrl}/${e}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["app-hairdresser-slider"]],inputs:{hairdresser:"hairdresser"},decls:10,vars:4,consts:[[1,"carousel","slide","carousel-fade",3,"animation"],[1,"view","w-100"],[4,"ngIf","ngIfElse"],["defaultImage",""],["mdbWavesEffect","",1,"mask","rgba-black-slight","waves-light"],[1,"carousel-caption"],[1,"h1-responsive"],["alt","Banner",1,"d-block","w-100","banner",3,"src"],["src","https://i.imgur.com/bl28HBR.jpg","alt","Banner",1,"d-block","w-100","banner"]],template:function(e,t){if(1&e&&(a.Vb(0,"mdb-carousel",0),a.Vb(1,"mdb-carousel-item"),a.Vb(2,"div",1),a.Ec(3,d,2,1,"div",2),a.Ec(4,l,1,0,"ng-template",null,3,a.Fc),a.Rb(6,"div",4),a.Ub(),a.Vb(7,"div",5),a.Vb(8,"h2",6),a.Gc(9),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.vc(5);a.lc("animation","fade"),a.Bb(3),a.lc("ngIf",t.hairdresser.bannerPath)("ngIfElse",e),a.Bb(6),a.Hc(t.hairdresser.name)}},directives:[b.f,b.C,n.k,b.E],styles:[".carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-25%}.banner[_ngcontent-%COMP%]{max-height:700px;width:auto}"]}),e})();var u=r("wZkO");function f(e,t){if(1&e){const e=a.Wb();a.Vb(0,"mdb-card"),a.Vb(1,"mdb-card-body"),a.Gc(2),a.Vb(3,"span",6),a.Gc(4),a.Ub(),a.Vb(5,"button",7),a.dc("click",(function(){a.yc(e);const t=a.gc().$implicit;return a.gc().bookTreatment(t)})),a.Gc(6,"Toevoegen"),a.Ub(),a.Ub(),a.Ub()}if(2&e){const e=a.gc().$implicit;a.Bb(2),a.Ic(" ",e.name," "),a.Bb(2),a.Ic("\u20ac",e.price,"")}}function g(e,t){if(1&e&&(a.Vb(0,"div"),a.Ec(1,f,7,2,"mdb-card",5),a.Ub()),2&e){const e=t.$implicit;a.Bb(1),a.lc("ngIf",1==e.category)}}function p(e,t){if(1&e){const e=a.Wb();a.Vb(0,"mdb-card"),a.Vb(1,"mdb-card-body"),a.Gc(2),a.Vb(3,"span",6),a.Gc(4),a.Ub(),a.Vb(5,"button",7),a.dc("click",(function(){a.yc(e);const t=a.gc().$implicit;return a.gc().bookTreatment(t)})),a.Gc(6,"Toevoegen"),a.Ub(),a.Ub(),a.Ub()}if(2&e){const e=a.gc().$implicit;a.Bb(2),a.Ic(" ",e.name," "),a.Bb(2),a.Ic("\u20ac",e.price,"")}}function h(e,t){if(1&e&&(a.Vb(0,"div"),a.Ec(1,p,7,2,"mdb-card",5),a.Ub()),2&e){const e=t.$implicit;a.Bb(1),a.lc("ngIf",0==e.category)}}function v(e,t){if(1&e){const e=a.Wb();a.Vb(0,"mdb-card"),a.Vb(1,"mdb-card-body"),a.Gc(2),a.Vb(3,"span",6),a.Gc(4),a.Ub(),a.Vb(5,"button",7),a.dc("click",(function(){a.yc(e);const t=a.gc().$implicit;return a.gc().bookTreatment(t)})),a.Gc(6,"Toevoegen"),a.Ub(),a.Ub(),a.Ub()}if(2&e){const e=a.gc().$implicit;a.Bb(2),a.Ic(" ",e.name," "),a.Bb(2),a.Ic("\u20ac",e.price,"")}}function k(e,t){if(1&e&&(a.Vb(0,"div"),a.Ec(1,v,7,2,"mdb-card",5),a.Ub()),2&e){const e=t.$implicit;a.Bb(1),a.lc("ngIf",2==e.category)}}let T=(()=>{class e{constructor(){this.newTreatment=new a.n}ngOnInit(){}bookTreatment(e){this.newTreatment.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["app-treatment-list"]],inputs:{hairdresser:"hairdresser"},outputs:{newTreatment:"newTreatment"},decls:7,vars:3,consts:[["mat-align-tabs","center"],["label","Vrouwen"],[4,"ngFor","ngForOf"],["label","Mannen"],["label","Kinderen"],[4,"ngIf"],[1,"pl-20"],["mdbBtn","","color","primary",1,"add","float-right",3,"click"]],template:function(e,t){1&e&&(a.Vb(0,"mat-tab-group",0),a.Vb(1,"mat-tab",1),a.Ec(2,g,2,1,"div",2),a.Ub(),a.Vb(3,"mat-tab",3),a.Ec(4,h,2,1,"div",2),a.Ub(),a.Vb(5,"mat-tab",4),a.Ec(6,k,2,1,"div",2),a.Ub(),a.Ub()),2&e&&(a.Bb(2),a.lc("ngForOf",t.hairdresser.treatments),a.Bb(2),a.lc("ngForOf",t.hairdresser.treatments),a.Bb(2),a.lc("ngForOf",t.hairdresser.treatments))},directives:[u.b,u.a,n.j,n.k,b.r,b.q,b.p],styles:[".add[_ngcontent-%COMP%]{margin-top:-1em}"]}),e})();function U(e,t){if(1&e){const e=a.Wb();a.Vb(0,"div",14),a.Vb(1,"button",15),a.dc("click",(function(){a.yc(e);const t=a.gc().$implicit;return a.gc(2).removeTreatment(t)})),a.Gc(2,"-"),a.Ub(),a.Gc(3),a.Ub()}if(2&e){const e=a.gc().$implicit;a.Bb(3),a.Ic(" x",e.amount," ")}}function V(e,t){if(1&e){const e=a.Wb();a.Vb(0,"div",14),a.Vb(1,"button",15),a.dc("click",(function(){a.yc(e);const t=a.gc().$implicit;return a.gc(2).removeTreatment(t)})),a.Gc(2,"-"),a.Ub(),a.Ub()}}function I(e,t){if(1&e&&(a.Vb(0,"div",11),a.Gc(1),a.Ec(2,U,4,1,"div",12),a.Ec(3,V,3,0,"ng-template",null,13,a.Fc),a.Ub()),2&e){const e=t.$implicit,r=a.vc(4);a.Bb(1),a.Jc(" ",e.name,", ",e.categoryString," "),a.Bb(1),a.lc("ngIf",e.amount>1)("ngIfElse",r)}}const w=function(e){return["/hairdresser/appointment/create/",e]};function B(e,t){if(1&e&&(a.Vb(0,"div"),a.Ec(1,I,5,4,"div",8),a.Vb(2,"div",9),a.Gc(3),a.Ub(),a.Vb(4,"div"),a.Vb(5,"a",10),a.Gc(6,"Bevestigen"),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.gc();a.Bb(1),a.lc("ngForOf",e.treatments),a.Bb(2),a.Ic(" Totaalprijs: \u20ac",e.totalPrice," "),a.Bb(2),a.lc("routerLink",a.pc(3,w,e.hairdresser.id))}}function y(e,t){1&e&&(a.Vb(0,"div",11),a.Gc(1," Er zijn geen behandelingen geselecteerd"),a.Ub())}let E=(()=>{class e{constructor(e){this._bookedTreatmentDataService=e}ngOnInit(){}get treatments(){return this._bookedTreatmentDataService.bookedTreatments}get totalPrice(){let e=0;for(let t of this.treatments)e+=t.price*t.amount;return e}receiveAddedTreatment(e){if(null!=this._bookedTreatmentDataService.hairdresser)if(this._bookedTreatmentDataService.hairdresser.id==this.hairdresser.id){let t=this._bookedTreatmentDataService.bookedTreatments.filter(t=>t.id==e.id)[0];t?t.amount++:(e.amount=1,this._bookedTreatmentDataService.bookTreatment(e))}else this._bookedTreatmentDataService.resetTreatments(),this._bookedTreatmentDataService.hairdresser=this.hairdresser,e.amount=1,this._bookedTreatmentDataService.bookTreatment(e);else this._bookedTreatmentDataService.hairdresser=this.hairdresser,e.amount=1,this._bookedTreatmentDataService.bookTreatment(e)}removeTreatment(e){e.amount<2?this._bookedTreatmentDataService.removeTreatment(e):e.amount--}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(s.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-treatment-added"]],inputs:{hairdresser:"hairdresser"},decls:10,vars:3,consts:[[1,"treatments"],[1,"row"],[1,"col-xl-6","col-md-12",3,"hairdresser","newTreatment"],[1,"col-xl-6","col-md-12"],[1,"list-group"],["mdbWavesEffect","",1,"list-group-item","active","waves-light"],[4,"ngIf","ngIfElse"],["noTreatments",""],["class","list-group-item waves-light",4,"ngFor","ngForOf"],[1,"list-group-item"],["mdbBtn","","color","primary",1,"add","float-right",3,"routerLink"],[1,"list-group-item","waves-light"],["class","d-inline-block amount",4,"ngIf","ngIfElse"],["noAmount",""],[1,"d-inline-block","amount"],["type","button",1,"removeTreatment",3,"click"]],template:function(e,t){if(1&e&&(a.Vb(0,"div",0),a.Vb(1,"div",1),a.Vb(2,"app-treatment-list",2),a.dc("newTreatment",(function(e){return t.receiveAddedTreatment(e)})),a.Ub(),a.Vb(3,"div",3),a.Vb(4,"div",4),a.Vb(5,"div",5),a.Gc(6," Geselecteerde behandelingen "),a.Ub(),a.Ec(7,B,7,5,"div",6),a.Ec(8,y,2,0,"ng-template",null,7,a.Fc),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&e){const e=a.vc(9);a.Bb(2),a.lc("hairdresser",t.hairdresser),a.Bb(5),a.lc("ngIf",t.treatments.length>0)("ngIfElse",e)}},directives:[T,b.E,n.k,n.j,c.e,b.p],styles:[".treatments[_ngcontent-%COMP%]{margin-top:3em}.amount[_ngcontent-%COMP%]{float:right}.removeTreatment[_ngcontent-%COMP%]{background-color:#e46262;color:#fff;border:0;border-radius:5px}"]}),e})(),_=(()=>{class e{constructor(e,t){this.route=e,this._bookedTreatmentDataServce=t}ngOnInit(){this.route.data.subscribe(e=>this.hairdresser=e.hairdresser),this._bookedTreatmentDataServce.resetTreatments()}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(c.a),a.Qb(s.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-hairdresser-detail"]],decls:3,vars:2,consts:[[3,"hairdresser"],[1,"container"]],template:function(e,t){1&e&&(a.Rb(0,"app-hairdresser-slider",0),a.Vb(1,"div",1),a.Rb(2,"app-treatment-added",0),a.Ub()),2&e&&(a.lc("hairdresser",t.hairdresser),a.Bb(2),a.lc("hairdresser",t.hairdresser))},directives:[m,E],styles:[""]}),e})();var O=r("5dVg");const G=[{path:"detail/:id",component:_,resolve:{hairdresser:r("qUz5").a}}];let D=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[n.c,c.f,O.a,i.a,c.f.forChild(G)]]}),e})()}}]);