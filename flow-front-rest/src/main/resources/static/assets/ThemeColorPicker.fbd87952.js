import{L as m,a as l,dA as c,b as d,aF as u,o as r,f as o,F as f,aI as C,p as a,b0 as _,m as k}from"./index.72db8407.js";import{b as h}from"./index.0ad9b7c8.js";import"./index.745811fc.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.802da1f1.js";import"./useWindowSizeFn.de59245c.js";import"./uniqBy.ce71960e.js";import"./_baseIteratee.d6fc2b22.js";import"./get.e445709e.js";import"./useContentViewHeight.e9d9b7fd.js";import"./index.a3257fd9.js";import"./useRefs.a6f29f73.js";import"./RedoOutlined.bf887c4f.js";import"./index.43cbb639.js";import"./lock.d6487ead.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.9c574014.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(f,null,C(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:_({background:t})},[k(p)],14,y))),128))],2)}var w=m(v,[["render",$]]);export{w as default};