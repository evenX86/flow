import{L as i,a as r,dz as l,b as p,e as m,aF as d,o as c,f as u,l as f,t as g,m as _,aG as b,p as v}from"./index.72db8407.js";import{b as y}from"./index.0ad9b7c8.js";import"./index.745811fc.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.802da1f1.js";import"./useWindowSizeFn.de59245c.js";import"./uniqBy.ce71960e.js";import"./_baseIteratee.d6fc2b22.js";import"./get.e445709e.js";import"./useContentViewHeight.e9d9b7fd.js";import"./index.a3257fd9.js";import"./useRefs.a6f29f73.js";import"./RedoOutlined.bf887c4f.js";import"./index.43cbb639.js";import"./lock.d6487ead.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.9c574014.js";const C=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(o){e.event&&y(e.event,o)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,o,h){const s=d("Select");return c(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(s,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var w=i(C,[["render",S],["__scopeId","data-v-2dba4940"]]);export{w as default};