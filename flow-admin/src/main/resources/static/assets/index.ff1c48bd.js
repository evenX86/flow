import{az as _,a as C,aB as o,o as f,k as A,B as n,dy as B,v as S,fz as r,h as m,p as t,n as a,C as s,t as p}from"./index.bbfb8c5d.js";import{A as D}from"./index.1311bc71.js";import{S as R}from"./index.dbc537d6.js";import{P as g}from"./index.6f4a9d56.js";import y from"./CurrentPermissionMode.2a07dfcd.js";import"./useFlexGapSupport.ae09cf13.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./eagerComputed.2918d49d.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.eb776706.js";const P=C({components:{Space:R,Alert:D,CurrentPermissionMode:y,PageWrapper:g},setup(){const{changeRole:u}=B(),e=S();return{userStore:e,RoleEnum:r,isSuper:m(()=>e.getRoleList.includes(r.SUPER)),isTest:m(()=>e.getRoleList.includes(r.TEST)),changeRole:u}}}),v={class:"mt-4"};function T(u,e,k,$,h,U){const l=o("CurrentPermissionMode"),E=o("Alert"),i=o("a-button"),F=o("Space"),c=o("PageWrapper");return f(),A(c,{title:"\u524D\u7AEF\u6743\u9650\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:n(()=>[t(l),a("p",null,[s(" \u5F53\u524D\u89D2\u8272: "),a("a",null,p(u.userStore.getRoleList),1)]),t(E,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),a("div",v,[s(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),t(F,null,{default:n(()=>[t(i,{onClick:e[0]||(e[0]=d=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(i,{onClick:e[1]||(e[1]=d=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:n(()=>[s(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}var O=_(P,[["render",T],["__scopeId","data-v-04241468"]]);export{O as default};