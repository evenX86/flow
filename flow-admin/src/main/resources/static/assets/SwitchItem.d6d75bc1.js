import{az as s,a as p,c as m,h as d,aB as l,i as c,j as h,p as u,t as f,q as C,aC as g,s as _,e as v}from"./index.e61ad282.js";import{S as y}from"./index.9f299dd3.js";import{b as S}from"./index.603bbce5.js";import"./index.e8c40a81.js";import"./index.cd444a78.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.9f50e000.js";import"./index.d9aea20d.js";import"./FullscreenOutlined.3a424424.js";import"./index.5f71bdf9.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./useFrameKeepAlive.63b5b436.js";import"./uniqBy.8c214189.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./index.f066cc44.js";import"./useRefs.0c428178.js";import"./PlusOutlined.e602ccf2.js";import"./RedoOutlined.5bbc1139.js";import"./index.8e210a09.js";import"./lock.d310358f.js";const B=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:o}=v(),n=d(()=>e.def?{checked:e.def}:{});function i(a){e.event&&S(e.event,a)}return{prefixCls:t,t:o,handleChange:i,getBindValue:n}}});function b(e,t,o,n,i,a){const r=l("Switch");return c(),h("div",{class:_(e.prefixCls)},[u("span",null,f(e.title),1),C(r,g(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var R=s(B,[["render",b],["__scopeId","data-v-fd7354e2"]]);export{R as default};