import{L as r,a as p,b as d,q as l,e as m,aF as c,o as h,f as u,l as f,t as C,m as g,aG as _,p as v}from"./index.72db8407.js";import{S as y}from"./index.749aa331.js";import{b as S}from"./index.0ad9b7c8.js";import"./index.745811fc.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.802da1f1.js";import"./useWindowSizeFn.de59245c.js";import"./uniqBy.ce71960e.js";import"./_baseIteratee.d6fc2b22.js";import"./get.e445709e.js";import"./useContentViewHeight.e9d9b7fd.js";import"./index.a3257fd9.js";import"./useRefs.a6f29f73.js";import"./RedoOutlined.bf887c4f.js";import"./index.43cbb639.js";import"./lock.d6487ead.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.9c574014.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=l(),o=m(()=>e.def?{checked:e.def}:{});function a(i){e.event&&S(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function k(e,t,n,o,a,i){const s=c("Switch");return h(),u("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(s,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=r(b,[["render",k],["__scopeId","data-v-fd7354e2"]]);export{K as default};