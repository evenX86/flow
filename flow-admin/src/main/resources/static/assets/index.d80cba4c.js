import{a as s,w as r,fs as _,O as m,o as c,i as k,aF as f,aI as C,az as O,aB as o,k as v,B as a,p as B,n as x,t as S}from"./index.bbfb8c5d.js";import{P as $}from"./index.6f4a9d56.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./eagerComputed.2918d49d.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";const g=s({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),m(()=>{t("mounted")}),(i,l)=>(c(),k("div",{ref_key:"wrap",ref:n},[f(i.$slots,"default")],512))}}),w=C(g);const y=s({components:{ClickOutSide:w,PageWrapper:$},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function E(e,t,n,i,l,h){const u=o("ClickOutSide"),p=o("PageWrapper");return c(),v(p,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:a(()=>[B(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:a(()=>[x("div",{onClick:t[0]||(t[0]=(...d)=>e.innerClick&&e.innerClick(...d)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var q=O(y,[["render",E],["__scopeId","data-v-1c7123ae"]]);export{q as default};