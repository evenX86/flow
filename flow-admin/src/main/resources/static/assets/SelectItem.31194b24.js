import{y as e,bx as t,j as s,Z as i,B as a,F as n,v as o,J as d,a0 as r,K as l}from"./vendor.880b4c6c.js";import{c as p}from"./index.a33a5e4d.js";import{b as m}from"./index.ef19295c.js";import"./index.1fccb455.js";/* empty css              *//* empty css              */import"./index.8376f5da.js";import"./index.e7adf083.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.62e399e2.js";import"./useContentViewHeight.d4b428eb.js";/* empty css              */import"./useSortable.1c9ace8f.js";import"./lock.d7876fcb.js";var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const f=l()(((e,t,s,l,p,m)=>{const c=i("Select");return a(),n("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(c,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));c.render=f,c.__scopeId="data-v-2dba4940";export default c;