import{c as e}from"./index.4926e6da.js";import{b as i}from"./index.ea513432.js";import{y as s,bS as t,Z as r,B as o,F as n,a7 as a,ao as d,v as p}from"./vendor.880b4c6c.js";import"./index.708cf583.js";/* empty css              *//* empty css              */import"./index.3f3f1bd3.js";import"./index.4dff03be.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.fe13848a.js";import"./useContentViewHeight.dbded6ea.js";/* empty css              */import"./useSortable.4052c204.js";import"./lock.3756ab12.js";var c=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});c.render=function(e,i,s,t,c,l){const m=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,d(e.colorList||[],(i=>(o(),n("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(m)],14,["onClick"])))),128))],2)};export default c;