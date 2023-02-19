var A=(t,a,c)=>new Promise((d,p)=>{var _=i=>{try{r(c.next(i))}catch(e){p(e)}},E=i=>{try{r(c.throw(i))}catch(e){p(e)}},r=i=>i.done?d(i.value):Promise.resolve(i.value).then(_,E);r((c=c.apply(t,a)).next())});import{az as P,a as v,dz as h,bz as g,bJ as b,w as M,h as S,fC as w,aB as l,bT as T,i as n,l as m,C as u,q as o,p as D,D as s,t as x,j as $,m as F,z as C,G as z}from"./index.e61ad282.js";import{A as N}from"./index.dbdde179.js";import{D as V}from"./index.9f50e000.js";import W from"./CurrentPermissionMode.40ca9bdf.js";import{A as j}from"./index.b897f1a2.js";import{P as I}from"./index.c79f76d5.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useSize.5a37866d.js";import"./eagerComputed.d3c262c3.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./transButton.2c723edc.js";const U=v({components:{Alert:N,PageWrapper:I,CurrentPermissionMode:W,Divider:V,Authority:j},setup(){const{hasPermission:t}=h(),a=g(),c=b(),d=M(),p=S(()=>c.getProjectConfig.permissionMode===w.BACK);function _(E){return A(this,null,function*(){const r="fakeToken"+E;d.setToken(r),d.getUserInfoAction(),a.changePermissionCode()})}return{hasPermission:t,permissionStore:a,switchToken:_,isBackPremissionMode:p}}});function q(t,a,c,d,p,_){const E=l("CurrentPermissionMode"),r=l("Divider"),i=l("Alert"),e=l("a-button"),f=l("Authority"),y=l("PageWrapper"),B=T("auth");return n(),m(y,{contentBackground:"",title:"\u6309\u94AE\u6743\u9650\u63A7\u5236",contentClass:"p-4"},{default:u(()=>[o(E),D("p",null,[s(" \u5F53\u524D\u62E5\u6709\u7684code\u5217\u8868: "),D("a",null,x(t.permissionStore.getPermCodeList),1)]),o(r),o(i,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316(\u5FC5\u987B\u5904\u4E8E\u540E\u53F0\u6743\u9650\u6A21\u5F0F\u624D\u53EF\u6D4B\u8BD5\u6B64\u9875\u9762\u6240\u5C55\u793A\u7684\u529F\u80FD)","show-icon":""}),o(r),o(e,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=k=>t.switchToken(2)),disabled:!t.isBackPremissionMode},{default:u(()=>[s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A2) ")]),_:1},8,["disabled"]),o(e,{type:"primary",onClick:a[1]||(a[1]=k=>t.switchToken(1)),disabled:!t.isBackPremissionMode},{default:u(()=>[s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A1,\u9ED8\u8BA4) ")]),_:1},8,["disabled"]),t.isBackPremissionMode?(n(),$(z,{key:0},[o(r,null,{default:u(()=>[s("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650")]),_:1}),o(f,{value:"1000"},{default:u(()=>[o(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(f,{value:"2000"},{default:u(()=>[o(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(f,{value:["1000","2000"]},{default:u(()=>[o(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})]),_:1}),o(r,null,{default:u(()=>[s("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650")]),_:1}),t.hasPermission("1000")?(n(),m(e,{key:0,type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),t.hasPermission("2000")?(n(),m(e,{key:1,color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),t.hasPermission(["1000","2000"])?(n(),m(e,{key:2,color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})):F("",!0),o(r,null,{default:u(()=>[s("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)")]),_:1}),C((n(),m(e,{type:"primary",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,"1000"]]),C((n(),m(e,{color:"success",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,"2000"]]),C((n(),m(e,{color:"error",class:"mx-4"},{default:u(()=>[s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ")]),_:1})),[[B,["1000","2000"]]])],64)):F("",!0)]),_:1})}var ru=P(U,[["render",q],["__scopeId","data-v-0194006c"]]);export{ru as default};